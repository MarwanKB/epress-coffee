import {config} from "dotenv";
config()
import express from "express"
import {CoffeeController} from "./controller";

const app = express();

const coffeeController = new CoffeeController()
app.use('/coffee',coffeeController.buildRoutes()); // enregistrement d'un
app.listen(process.env.PORT, function (){
    console.log("Server Listening on port " + process.env.PORT)
})