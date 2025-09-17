import type { NextFunction, Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];

    if (!authHeader || typeof authHeader !== 'string') { // check authHeader's type whether it is string or not
        return res.status(401).json({ error: "Unauthorized" });
    }

    const token = authHeader.split(' ')[1]; // at this line authHeader is string

    if (!token) {
        return res.status(401).json({ error: "Access denied! No token provided" });
    }
    // You may want to call next() or add further logic here
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        if (typeof payload === 'undefined') {
            return res.status(401).json({ error: "Invalid token" });
        }

        // Extend the Request type to allow 'user' property and add user info to req object
        (req as Request & { user?: any }).user = {
            userId: payload['sub'],
            email: payload['email'],
            name: payload['name'],
        }

        // Add userId to headers for downstream services
        req.headers['x-user-id'] = payload['sub'];
        //optional
        req.headers['x-user-email'] = payload['email'];
        req.headers['x-user-name'] = payload['name'];
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });

    }
}


export default authMiddleware;