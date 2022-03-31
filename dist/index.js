"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const app = (0, express_1.default)();
const coffeeController = new controller_1.CoffeeController();
app.use('/coffee', coffeeController.buildRoutes()); // enregistrement d'un
app.listen(process.env.PORT, function () {
    console.log("Server Listening on port " + process.env.PORT);
});
//# sourceMappingURL=index.js.map