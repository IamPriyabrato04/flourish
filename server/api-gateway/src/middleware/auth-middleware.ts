import type { NextFunction, Request, Response } from "express";
import { OAuth2Client, type TokenPayload } from "google-auth-library";
import { logger } from "../utils/logger";

// 1) Env + client
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
if (!GOOGLE_CLIENT_ID) {
    logger.fatal("GOOGLE_CLIENT_ID is not set. Auth middleware cannot function without it.");
    throw new Error("Missing GOOGLE_CLIENT_ID");
}
const oauthClient = new OAuth2Client(GOOGLE_CLIENT_ID);


// 3) Middleware
export default async function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Node lower-cases header names; get() normalizes + returns string|undefined
    const authHeader = req.get("authorization");
    if (!authHeader) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const [scheme, token] = authHeader.split(" ");
    if (!token || !scheme || scheme.toLowerCase() !== "bearer") {
        return res.status(401).json({ error: "Access denied! No token provided" });
    }

    try {
        const ticket = await oauthClient.verifyIdToken({
            idToken: token,
            audience: GOOGLE_CLIENT_ID, // keep in sync with the constant
        });

        const payload: TokenPayload | undefined = ticket.getPayload();
        if (!payload) {
            return res.status(401).json({ error: "Invalid token" });
        }

        // Optional extra checks (helpful in production)
        // if (payload.iss !== "https://accounts.google.com" && payload.iss !== "accounts.google.com") {
        //   return res.status(401).json({ error: "Invalid issuer" });
        // }
        // if (!payload.email_verified) {
        //   return res.status(401).json({ error: "Email not verified" });
        // }

        req.user = {
            id: payload.sub!,
            email: payload.email,
            name: payload.name,
            image: payload.picture,
        };

        // Do NOT mutate req.headers — attach to res.locals or set on outgoing proxy requests instead.
        res.locals.userId = payload.sub;
        res.locals.userEmail = payload.email;
        res.locals.userName = payload.name;

        next();
    } catch (err) {
        // Optional: log details server-side, keep response generic
        logger.warn({ err }, "Failed to verify Google ID token");
        return res.status(401).json({ error: "Invalid token" });
    }
}
