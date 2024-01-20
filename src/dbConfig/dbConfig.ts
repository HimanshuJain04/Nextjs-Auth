import mongoose, { Connection } from "mongoose";

export async function dbConnection() {
    try {
        mongoose.connect(process.env.MONGODB_URL!)

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("DB Connection successfully");
        });

    } catch (err) {

        console.log("DB Connection failed");
        console.log(err);
        process.exit(1);

    }
}