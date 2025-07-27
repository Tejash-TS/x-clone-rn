import express from "express"
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
const app = express();


app.get("/",(req,res)=> res.send("hello from server"))


// app.listen(ENV.PORT, () =>console.log("Server is up and running on port:",ENV.PORT))

const startServer= async ()=>{
    try{
        await connectDB();
        app.listen(ENV.PORT, () =>console.log("Server is up and running on port:",ENV.PORT));

    }catch(error){
        console.error("fail to start server:",error.message);
        process.exit(1);
        }
};
startServer();