import express from "express";
import DBConection from "./db/db.conection.js";
import dotenv from "dotenv";
import cors from "cors"

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

//DB Connection
DBConection();

//cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use("/", (req, res) => {
    res.send("Hy Server I am Back!");
});

app.listen(PORT, () => {
    console.log(`Server has started on PORT: ${PORT}`);
});

// console.log("Hy Server!")