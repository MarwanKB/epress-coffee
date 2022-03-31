"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeController = void 0;
const express_1 = __importDefault(require("express"));
const coffee_service_1 = require("../services/coffee.service");
class CoffeeController {
    constructor(mongoose) {
        this.mongoose = mongoose;
    }
    createCoffee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const coffeeBody = req.body;
            if (!coffeeBody.name || !coffeeBody.intensity || !coffeeBody.price) {
                res.status(400).end(); // 400 -> bad request
                return;
            }
            const coffee = yield coffee_service_1.CoffeeService.getInstance().createCoffee({
                name: coffeeBody.name,
                intensity: coffeeBody.intensity,
                price: coffeeBody.price,
                origin: coffeeBody.origin
            });
            res.json(coffee);
        });
    }
    getCoffee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const coffee = yield coffee_service_1.CoffeeService.getInstance().getByID(req.params.id);
                if (coffee === null) {
                    res.status(404).end();
                    return;
                }
                res.send(coffee);
            }
            catch (_a) {
                res.status(400).end();
                return;
            }
        });
    }
    getAllCoffees(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const coffees = yield coffee_service_1.CoffeeService.getInstance().getAll();
            res.json(coffees);
        });
    }
    deleteCoffee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sucess = yield coffee_service_1.CoffeeService.getInstance().deleteById(req.params.id);
                if (sucess) {
                    res.status(204).end();
                    return;
                }
                else {
                    res.status(404).end();
                    return;
                }
            }
            catch (_a) {
                res.status(400).end();
                return;
            }
        });
    }
    updateCoffee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const coffee = yield coffee_service_1.CoffeeService.getInstance().updateByID(req.params.id, req.body);
                if (!coffee) {
                    res.status(404).end();
                    return;
                }
                res.json(coffee);
            }
            catch (_a) {
                res.status(400).end();
                return;
            }
        });
    }
    buildRoutes() {
        const router = express_1.default.Router();
        router.post('/', express_1.default.json(), this.createCoffee.bind(this));
        router.get('/', express_1.default.json(), this.getAllCoffees.bind(this));
        router.get('/:id', this.getCoffee.bind(this));
        router.delete('/:id', this.deleteCoffee.bind(this));
        router.put('/:id', express_1.default.json(), this.updateCoffee.bind(this));
        return router;
    }
}
exports.CoffeeController = CoffeeController;
//# sourceMappingURL=coffee.controller.js.map