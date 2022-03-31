"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeController = void 0;
const express_1 = __importDefault(require("express"));
class CoffeeController {
    sayHello(req, res) {
        res.send("Say Hello");
    }
    sayCoffe(req, res) {
        res.send("Say Coffee");
    }
    buildRoutes() {
        const router = express_1.default.Router();
        router.get('/hello', this.sayHello.bind(this));
        router.get('/coffee', this.sayCoffe.bind(this));
        return router;
    }
}
exports.CoffeeController = CoffeeController;
//# sourceMappingURL=coffee.controller.js.map