import express, {Router, Request, Response} from "express";
import {Mongoose} from "mongoose";
import {CoffeeModele} from "../models/coffee.model";
import {CoffeeService} from "../services/coffee.service";
export class CoffeeController{

    private mongoose : Mongoose;

    constructor(mongoose : Mongoose) {
        this.mongoose = mongoose;
    }
    async createCoffee(req : Request, res : Response){
        const coffeeBody = req.body;
        if(!coffeeBody.name || !coffeeBody.intensity || !coffeeBody.price){
            res.status(400).end(); // 400 -> bad request
            return;
        }
        const coffee = await CoffeeService.getInstance().createCoffee({
            name : coffeeBody.name,
            intensity  : coffeeBody.intensity,
            price : coffeeBody.price,
            origin : coffeeBody.origin
        });
        res.json(coffee);
    }

    buildRoutes() : Router{
        const router = express.Router();
        router.post('/',express.json(), this.createCoffee.bind(this))
        return router;
    }
}