import { Mongoose } from "mongoose";

let isConnected = false; //tract the connection Status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already Connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "share_prompts",
      userNewUrlParser: true,
      userUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
