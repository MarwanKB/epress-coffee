import {CoffeeDocument, CoffeeModele, CoffeeProps} from "../models/coffee.model";

export * from './coffee.service'

export class CoffeeService{
    private static instance : CoffeeService;

    public static getInstance() : CoffeeService{
        if(CoffeeService.instance === undefined){
            CoffeeService.instance = new CoffeeService();
        }
        return CoffeeService.instance;
    }

    private constructor() {}

    public async createCoffee(props : CoffeeProps): Promise <CoffeeDocument> {
        const model = new CoffeeModele(props);
        const coffee = await model.save();
        return coffee;
    }
}