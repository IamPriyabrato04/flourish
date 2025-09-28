import mongoose from "mongoose";

const designSchema = new mongoose.Schema({
   userId: String,
   title: String,
   description: String,
   canvasData: String,
   width: Number,
   height: Number,
   category: String,
   created_at: {
      type: Date,
      default: Date.now,
   },
   updated_at: {
      type: Date,
      default: Date.now,
   }
});


const Design = mongoose.models.Design || mongoose.model('Design', designSchema);
export default Design;