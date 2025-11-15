import type { NextFunction, Request, Response } from "express";

const authenticatedRequest = (req: Request, res: Response, next: NextFunction) => {
    // Extract userId from custom header 'x-user-id'
    const userId = req?.headers?.['x-user-id'];

    if (!userId || typeof userId !== 'string') {
        return res.status(401).json({ error: "Access denied! Please login to continue" });
    }

    // Attach userId to request object(user) for downstream use
    (req as Request & { user?: object }).user = { userId };
    next();

}
export default authenticatedRequest;