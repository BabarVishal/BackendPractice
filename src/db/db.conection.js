import mongoose from "mongoose";

const DBConection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected!");
    } catch (error) {
        console.log("DB not connected!", error);
    }
};

export default DBConection;
