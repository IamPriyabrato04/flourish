import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

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
        const PORT = process.env.PORT || 5003;
        app.listen(PORT, () => {
            console.log(`Upload service is running on port: ${PORT}`);
        })
    } catch (err) {
        console.error("Failed to connect the upload service", err);
        process.exit(1);
    }
}


startServer();