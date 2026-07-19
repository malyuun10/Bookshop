import express from "express";
import dotenv from "dotenv"
import bookRouter from "./routers/book.router.js"
import { connectDB } from "./config/db.js";

const app = express();
app.use(express.json());
dotenv.config()
// (req, res) => res.send("all books at all")
app.use("/api/book",bookRouter)

const port = process.env.PORT || 5000;  
app.listen(port,()=>{
    connectDB();
    console.log(`the server is running at ${port}`)
})