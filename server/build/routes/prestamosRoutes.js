"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prestamosControllers_1 = __importDefault(require("../controllers/prestamosControllers"));
class PrestamoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', prestamosControllers_1.default.list);
        this.router.get('/:id', prestamosControllers_1.default.getOne);
        this.router.post('/', prestamosControllers_1.default.create);
        this.router.put('/:id', prestamosControllers_1.default.update);
        this.router.delete('/:id', prestamosControllers_1.default.delete);
    }
}
exports.default = new PrestamoRoutes().router;
