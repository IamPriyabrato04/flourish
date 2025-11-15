import express, {
  type Request,
  type Response,
} from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import proxy from "express-http-proxy";
import dotenv from "dotenv";
import { logger } from "./utils/logger";

dotenv.config();

import authMiddleware from "./middleware/auth-middleware";
import { ipBlocker, rateLimiter, speedLimiter } from "./middleware/rate-limit";
import morgan from "morgan";

const app = express();

// ----- Basic middlewares -----
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('combined'));

// ----- rate limiting middlewares -----
app.use(rateLimiter);
app.use(speedLimiter);
app.use(ipBlocker(["192.168.1.10"])); // Example blocked IPs

// CORS configuration

const corsOptions = {
  origin: process.env.CLIENT,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
// apply cors middleware
app.use(cors(corsOptions));


// -------- health/readiness ----------
app.get("/healthz", (_req, res) => res.status(200).json({ status: "ok" }));
app.get("/readyz", (_req, res) => res.status(mongoose.connection.readyState === 1 ? 200 : 503).json({ ready: mongoose.connection.readyState === 1 }));

// --------- 404 & error handling--------
app.use((_req, res) => res.status(404).json({ error: "Not Found" }));



// --------- Proxy routes ---------
const proxyOptions = {
  proxyReqPathResolver: (req: Request) => {
    return req.originalUrl.replace(/^\/v1/, "/api");
  },
  proxyErrorHandler: (err: Error, res: Response) => {
    logger.error({ err }, "Proxy error:");
    res.status(500).json({
      error: "Internal server error!",
      message: err.message,
    });
  },
};

app.use(
  "/v1/designs",
  authMiddleware,
  proxy(process.env.DESIGN as string, {
    ...proxyOptions,
  })
);

// here extra logic will be added for subscription service middleware
app.use(
  "/v1/subscription",
  authMiddleware,
  proxy(process.env.SUBSCRIPTION as string, {
    ...proxyOptions,
  })
);

app.use(
  "/v1/media",
  authMiddleware,
  proxy(process.env.UPLOAD as string, {
    ...proxyOptions,
    parseReqBody: false,
  })
);

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  logger.error("MONGO_URI environment variable is not set.");
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => {
    logger.info("Connected to MongoDB");
  })
  .catch((error: Error) => {
    logger.error({ error }, "Error connecting to MongoDB");
    process.exit(1);
  });

async function startServer() {
  try {
    // Any asynchronous initialization can go here
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      logger.info(`API GATEWAY is running on port: ${PORT}`);
      logger.info(`DESIGN SERVICE is running on: ${process.env.DESIGN}`);
      logger.info(
        `SUBSCRIPTION SERVICE is running on: ${process.env.SUBSCRIPTION}`
      );
      logger.info(`UPLOAD SERVICE is running on: ${process.env.UPLOAD}`);
    });
  } catch (err) {
    logger.error({ err }, "Failed to connect the design service");
    process.exit(1);
  }
}

startServer();
