import mongoose from "mongoose";
export interface CoffeeProps {
    name: string;
    intensity: number;
    origin?: string;
    price: number;
}
export declare type CoffeeDocument = CoffeeProps & Document;
export declare const CoffeeModele: mongoose.Model<any, {}, {}, {}>;
