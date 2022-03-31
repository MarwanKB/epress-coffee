import {config} from "dotenv";
config()
import express from "express"
import {CoffeeController} from "./controller";
import mongoose from "mongoose";

async function  startServer() : Promise<void>{

    const m = await mongoose.connect(process.env.MONGO_URI as string,{
        auth : {
            username : process.env.MONGO_USER,
            password : process.env.MONGO_PASSWORD
        }
    });
    const app = express();

    const coffeeController = new CoffeeController(m)
    app.use('/coffee',coffeeController.buildRoutes()); // enregistrement d'un routeur

    app.listen(process.env.PORT, function (){
        console.log("Server Listening on port " + process.env.PORT)
    })
}

startServer().catch(console.error);