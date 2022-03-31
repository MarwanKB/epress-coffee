import {CoffeeDocument, CoffeeModele, CoffeeProps} from "../models/coffee.model";
import {Schema} from "mongoose";

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

    async getAll() : Promise<CoffeeDocument[]> {
        return CoffeeModele.find().exec();
    }

    async getByID(id : string) : Promise<CoffeeDocument | null > {
        return CoffeeModele.findById(id).exec();
    }

    async deleteById(id: string) : Promise<Boolean>{
        const res = await CoffeeModele.deleteOne({id: id}).exec();
        return res.deletedCount ===1;
    }

    async updateByID(id: string, props: CoffeeProps) : Promise<CoffeeDocument|null>  {
        const coffee = await this.getByID(id);
        if(!coffee){
            return null;
        }
        if(props.name !== undefined){
            coffee.name = props.name
        }
        if(props.price !== undefined){
            coffee.price = props.price
        }
        if(props.origin !== undefined){
            coffee.origin = props.origin
        }
        if(props.intensity !== undefined){
            coffee.intensity = props.intensity
        }
        return  coffee.save();
    }
}