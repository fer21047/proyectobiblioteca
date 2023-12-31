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
class BooksController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield database_1.default.query('SELECT * FROM book');
            res.json(books);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const books = yield database_1.default.query('SELECT * FROM book WHERE id = ?', [id]);
            console.log(books.length);
            if (books.length > 0) {
                return res.json(books[0]);
            }
            res.status(404).json({ text: "El libro especificado no existe" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE book set ?  WHERE id = ?', [req.body, id]);
            res.json({ message: 'La actividad se actualizo' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO book set ?', [req.body]);
            res.json({ message: 'Nuevo libro guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM book WHERE id = ?', [id]);
            res.json({ message: "El libro ha sido eliminado" });
        });
    }
}
const booksController = new BooksController;
exports.default = booksController;
