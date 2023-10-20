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
class UsuariosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM Usuario');
            res.json(usuarios);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUsuario } = req.params;
            const usuarios = yield database_1.default.query('SELECT * FROM Usuario WHERE IdUsuario = ?', [idUsuario]);
            if (usuarios.length > 0) {
                return res.json(usuarios[0]);
            }
            res.status(404).json({ text: "El usuario especificado no existe" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUsuario } = req.params;
            yield database_1.default.query('UPDATE Usuario set ?  WHERE IdUsuario = ?', [req.body, idUsuario]);
            res.json({ message: 'El usuario se actualizó' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Usuario set ?', [req.body]);
            res.json({ message: 'Nuevo usuario guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUsuario } = req.params;
            yield database_1.default.query('DELETE FROM Usuario WHERE IdUsuario = ?', [idUsuario]);
            res.json({ message: "El usuario ha sido eliminado" });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { correo, password1 } = req.body;
            // Buscar al usuario con el correo proporcionado
            const usuarios = yield database_1.default.query('SELECT * FROM Usuario WHERE Correo = ?', [correo]);
            // Si no encontramos al usuario o la contraseña es incorrecta, respondemos con error
            if (usuarios.length === 0 || usuarios[0].Password !== password1) { // Asumiendo que "Password" es el nombre de la columna de contraseña en tu tabla.
                return res.status(401).json({ text: 'Las credenciales son incorrectas' });
            }
            // Si todo está bien, devolvemos el usuario (sin enviar la contraseña al cliente)
            const userToSend = Object.assign({}, usuarios[0]);
            delete userToSend.Password;
            res.json(userToSend);
        });
    }
}
const usuariosController = new UsuariosController();
exports.default = usuariosController;
