"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multasController_1 = __importDefault(require("../controllers/multasController")); // Update the import to use MultasController
class MultaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', multasController_1.default.list); // Update the controller to use multasController
        this.router.get('/:idMulta', multasController_1.default.getOne); // Update the controller to use multasController
        this.router.post('/', multasController_1.default.create); // Update the controller to use multasController
        this.router.put('/:idMulta', multasController_1.default.update); // Update the controller to use multasController
        this.router.delete('/:idMulta', multasController_1.default.delete); // Update the controller to use multasController
    }
}
const multaRoutes = new MultaRoutes(); // Rename the variable
exports.default = multaRoutes.router;
