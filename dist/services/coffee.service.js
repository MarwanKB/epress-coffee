"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeService = void 0;
const coffee_model_1 = require("../models/coffee.model");
__exportStar(require("./coffee.service"), exports);
class CoffeeService {
    constructor() { }
    static getInstance() {
        if (CoffeeService.instance === undefined) {
            CoffeeService.instance = new CoffeeService();
        }
        return CoffeeService.instance;
    }
    createCoffee(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = new coffee_model_1.CoffeeModele(props);
            const coffee = yield model.save();
            return coffee;
        });
    }
}
exports.CoffeeService = CoffeeService;
//# sourceMappingURL=coffee.service.js.map