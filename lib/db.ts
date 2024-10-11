import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local",
    );
}

const connect = async () => {
    try {
        console.log("In DB Connect");
        const readyState = mongoose.connection.readyState;
        if (readyState === 1) {
            console.log("Db is already connected");
            return;
        }
        if (readyState === 2) {
            console.log("connecting...");
            return;
        }
        await mongoose.connect(MONGODB_URI, {
            dbName: "egen-demo",
            bufferCommands: true,
        });

    } catch (error: any) {
        console.error("Error in connecting db", error);
        throw new Error("Error", error);
    }
};

export default connect;