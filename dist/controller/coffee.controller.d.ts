import { Router, Request, Response } from "express";
import { Mongoose } from "mongoose";
export declare class CoffeeController {
    private mongoose;
    constructor(mongoose: Mongoose);
    createCoffee(req: Request, res: Response): Promise<void>;
    buildRoutes(): Router;
}
