import rateLimit from "express-rate-limit";
import slowDown from "express-slow-down";
import type { Request, Response, NextFunction } from "express";

export const rateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  limit: 50, // 50 requests per window per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." },
});


export const speedLimiter = slowDown({
  windowMs: 10 * 60 * 1000, // 10 minutes
  delayAfter: 50, // start slowing down after 50 requests
  delayMs: () => 1000, // add 1000ms per request above delayAfter
});

// Optionally block suspicious IPs
export const ipBlocker =
  (blockedIPs: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const ip: string = req.ip ?? "";
    if (blockedIPs.includes(ip)) {
      return res.status(403).json({ error: "Access denied." });
    }
    next();
  };
