import express, { type NextFunction, type Request, type Response } from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import proxy from "express-http-proxy";
import dotenv from "dotenv";
dotenv.config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

const proxyOptions = {
    proxyReqPathResolver: (req: Request) => {
        return req.originalUrl.replace(/^\/v1/, "/api");
    },
    proxyErrorHandler: (err: Error, res: Response, next: NextFunction) => {
        console.error("Proxy error:", err);
        res.status(500).json({
            error: "Internal server error!",
            message: err.message,
        });
    },
};


app.use("/v1/designs", proxy(process.env.DESIGN as string, {
    ...proxyOptions,
}));

app.use("/v1/subscription", proxy(process.env.SUBSCRIPTION as string, {
    ...proxyOptions,
}));

app.use("/v1/media", proxy(process.env.UPLOAD as string, {
    ...proxyOptions,
    parseReqBody: false,
}));

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    console.error("MONGO_URI environment variable is not set.");
    process.exit(1);
}

mongoose.connect(mongoUri).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
});





async function startServer() {
    try {
        // Any asynchronous initialization can go here
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`API GATEWAY is running on port: ${PORT}`);
            console.log(`DESIGN SERVICE is running on port: ${process.env.DESIGN}`);
            console.log(`SUBSCRIPTION SERVICE is running on port: ${process.env.SUBSCRIPTION}`);
            console.log(`UPLOAD SERVICE is running on port: ${process.env.UPLOAD}`);
        })
    } catch (err) {
        console.error("Failed to connect the design service", err);
        process.exit(1);
    }
}


startServer();