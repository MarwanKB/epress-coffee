import express, {Router, Request, Response} from "express";
export class CoffeeController{
    sayHello(req : Request, res : Response){
        res.send("Say Hello");
    }

    sayCoffee(req : Request, res : Response){
        res.send("Say Coffee");
    }
    buildRoutes() : Router{
        const router = express.Router();
        router.get('/hello', this.sayHello.bind(this))
        router.get('/coffee', this.sayCoffee.bind(this))
        return router;
    }
}