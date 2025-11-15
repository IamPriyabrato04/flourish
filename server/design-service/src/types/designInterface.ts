export interface DesignInterface {
  _id?: string;
  userId: string;
  title?: string;
  description?: string;
  canvasData?: string;
  width?: number;
  height?: number;
  created_at: Date;
  updated_at: Date;
}