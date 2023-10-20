"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const multasRoutes_1 = __importDefault(require("./routes/multasRoutes"));
const prestamosRoutes_1 = __importDefault(require("./routes/prestamosRoutes"));
const booksRoutes_1 = __importDefault(require("./routes/booksRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        const allowedOrigins = ['https://dominio1.com', 'https://dominio2.com'];
        this.app.use((0, cors_1.default)({
            origin: function (origin, callback) {
                if (!origin || allowedOrigins.includes(origin)) {
                    callback(null, true);
                }
                else {
                    callback(new Error('Origen no permitido por la política de CORS'));
                }
            }
        }));
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/multas', multasRoutes_1.default);
        this.app.use('/api/prestamos', prestamosRoutes_1.default);
        this.app.use('/api/books', booksRoutes_1.default);
        this.app.use('/api/usuarios', usuariosRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
