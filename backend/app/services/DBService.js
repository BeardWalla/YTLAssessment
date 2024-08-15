import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const db = await mongoose.connect("mongodb+srv://rarshvindran:AMTs60dtaoaYLxp6@cluster0.tfgff.mongodb.net/RNYTL");
    } catch (ex) {
        console.log('Error connection database ' + ex?.message);
    }
};