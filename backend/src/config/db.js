import mongoose from "mongoose";
import{ ENV } from "./env.js"


export const connectDB= async ()=>{
    try {
        await mongoose.connect(ENV.MONGO_URI)
        console.log("DB connected")
}catch (error){
console.log("Error connecting to Mongo")
process.exit(1)
}

}