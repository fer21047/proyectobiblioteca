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
class PrestamosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prestamos = yield database_1.default.query('SELECT * FROM prestamo'); // Cambio de "prestamo" a "prestamos"
            res.json(prestamos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const prestamo = yield database_1.default.query('SELECT * FROM prestamo WHERE IdPrestamo = ?', [id]); // Cambio de "prestamo" a "prestamos"
            console.log(prestamo.length);
            if (prestamo.length > 0) {
                return res.json(prestamo[0]);
            }
            res.status(404).json({ text: "The prestamo doesn't exist" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO prestamo set ?', [req.body]); // Cambio de "prestamo" a "prestamos"
            res.json({ message: 'Prestamo Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE prestamo set ? WHERE IdPrestamo = ?', [req.body, id]); // Cambio de "prestamo" a "prestamos"
            res.json({ message: "The prestamo was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM prestamo WHERE IdPrestamo = ?', [id]); // Cambio de "prestamo" a "prestamos"
            res.json({ message: "The prestamo was deleted" });
        });
    }
}
const prestamosController = new PrestamosController();
exports.default = prestamosController;
