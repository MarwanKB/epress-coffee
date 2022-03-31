import express, {Router, Request, Response} from "express";
import {Mongoose} from "mongoose";
import {CoffeeModele} from "../models/coffee.model";
import {CoffeeService} from "../services/coffee.service";
import exp from "constants";
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

    async getCoffee(req : Request, res: Response){
        try{
        const coffee = await CoffeeService.getInstance().getByID(req.params.id);
            if(coffee === null){
                res.status(404).end();
                return
            }
            res.send(coffee);
        }catch {
            res.status(400).end();
            return;
        }
    }

    async getAllCoffees(req : Request, res : Response){
        const coffees = await CoffeeService.getInstance().getAll();
        res.json(coffees)
    }

    async deleteCoffee(req : Request, res : Response){
        try {
            const sucess = await CoffeeService.getInstance().deleteById(req.params.id);
            if (sucess) {
                res.status(204).end();
                return;
            } else {
                res.status(404).end()
                return;
            }
        }
        catch {
            res.status(400).end();
            return;
        }
    }

    async updateCoffee(req : Request, res : Response){
        try{
            const coffee = await CoffeeService.getInstance().updateByID(req.params.id, req.body);
            if(!coffee){
                res.status(404).end();
                return;
            }
            res.json(coffee);
        }
        catch {
            res.status(400).end();
            return;
        }
    }


        buildRoutes() : Router{
        const router = express.Router();
        router.post('/',express.json(), this.createCoffee.bind(this))
        router.get('/',express.json(), this.getAllCoffees.bind(this))
        router.get('/:id', this.getCoffee.bind(this))
        router.delete('/:id', this.deleteCoffee.bind(this))
        router.put('/:id',express.json(), this.updateCoffee.bind(this))
        return router;
    }
}