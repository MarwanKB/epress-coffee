import { Router, Request, Response } from "express";
import { Mongoose } from "mongoose";
export declare class CoffeeController {
    private mongoose;
    constructor(mongoose: Mongoose);
    createCoffee(req: Request, res: Response): Promise<void>;
    getCoffee(req: Request, res: Response): Promise<void>;
    getAllCoffees(req: Request, res: Response): Promise<void>;
    deleteCoffee(req: Request, res: Response): Promise<void>;
    updateCoffee(req: Request, res: Response): Promise<void>;
    buildRoutes(): Router;
}
