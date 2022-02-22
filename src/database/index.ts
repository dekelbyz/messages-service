import mongoose from "mongoose";

/** MongoDB connection. */
export async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("DB connected");
  } catch (e) {
    return e;
  }
}
