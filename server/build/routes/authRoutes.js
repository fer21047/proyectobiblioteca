"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = __importDefault(require("../controllers/authController"));
class AuthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // Ruta específica para el login (cambia de GET a POST)
        this.router.post('/', authController_1.default.login);
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
