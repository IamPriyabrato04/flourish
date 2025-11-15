import "express";

declare global {
  namespace Express {
    // Basic user object added by auth middleware
    interface User {
      id: string;
      email?: string;
      name?: string;
      image?: string;
      googleId?: string;
    }

    interface SlowDownInfo {
      limit: number;
      current: number;
      remaining: number;
      resetTime?: Date;
    }

    interface Request {
      user?: User;

      slowDown?: SlowDownInfo;

      // For tracing/logging/proxying
      requestId?: string;
    }
  }
}
