import mongoose from "mongoose";

const DBConnection = async () => {
// JWT_SECRET = "sjdkjsfjsf"

    const MONGO_URI = "mongodb+srv://samiksha:sami1234@cluster0.vob2no7.mongodb.net/jobApplication";
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log(' Your Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;