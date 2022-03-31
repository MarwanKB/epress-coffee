import { CoffeeDocument, CoffeeProps } from "../models/coffee.model";
export * from './coffee.service';
export declare class CoffeeService {
    private static instance;
    static getInstance(): CoffeeService;
    private constructor();
    createCoffee(props: CoffeeProps): Promise<CoffeeDocument>;
    getAll(): Promise<CoffeeDocument[]>;
    getByID(id: string): Promise<CoffeeDocument | null>;
    deleteById(id: string): Promise<Boolean>;
    updateByID(id: string, props: CoffeeProps): Promise<CoffeeDocument | null>;
}
