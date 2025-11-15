import type { Request, Response } from "express";
import Design, { type DesignInterface } from "../models/design-model";


interface AuthUser {
   userId: string;
   [key: string]: any;
}

const getUserDesigns = async (req: Request, res: Response) => {
   try {
      const userId = (req as Request & { user?: AuthUser })?.user?.userId;
      console.log("User ID:", userId);

      if (!userId || typeof userId !== 'string') {
         return res.status(401).json({ message: 'Access denied! Please login to continue' });
      }
      // Fetch designs from database based on userId
      const designs: DesignInterface[] = await Design.find({ userId }).sort({ updated_at: -1 });

      return res.status(200).json({
         success: true,
         data: designs
      });
   }
   catch (err) {
      console.log(err);

      res.status(500).json({
         message: "Can't fetch designs",
      })
   }
}


const getUserDesignsByID = async (req: Request, res: Response) => {
   try {
      const userId = req.params.userId;
   }
   catch (err) {
      console.log(err);

      res.status(500).json({
         message: "Can't fetch designs by ID",
      })
   }
}


const saveDesign = async (req: Request, res: Response) => {
   try {
      const userId = req.params.userId;
   }
   catch (err) {
      console.log(err);

      res.status(500).json({
         message: "Error while saving design",
      })
   }
}


const deleteDesign = async (req: Request, res: Response) => {
   try {
      const userId = req.params.userId;
   }
   catch (err) {
      console.log(err);

      res.status(500).json({
         message: "Error while deleteing design",
      })
   }
}