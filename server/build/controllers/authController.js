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
const database_1 = __importDefault(require("../database"));
class AuthController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { correo, Password } = req.body;
            console.log('Correo recibido:', correo);
            console.log('Contraseña recibida:', Password);
            console.log(req.body);
            // Buscar al usuario con el correo proporcionado
            const usuarios = yield database_1.default.query('SELECT * FROM Usuario WHERE Correo = ? AND Password = ?', [correo, Password]);
            // Si no encontramos al usuario o la contraseña es incorrecta, respondemos con error
            if (usuarios.length === 0 || usuarios[0].Password.trim() !== Password.trim()) {
                res.status(401).json({ text: 'Las credenciales son incorrectas' });
                return;
            }
            else {
                // Si todo está bien, devolvemos el usuario (sin enviar la contraseña al cliente)
                const userToSend = Object.assign({}, usuarios[0]);
                delete userToSend.Password;
                res.json({ success: true, user: userToSend });
                return; // Asegurarse de que la función finalice aquí
            }
        });
    }
}
const authController = new AuthController();
exports.default = authController;
