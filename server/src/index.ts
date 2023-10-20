import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import multasRoutes from './routes/multasRoutes';
import prestamosRoutes from './routes/prestamosRoutes';
import booksRoutes from './routes/booksRoutes';
import usuarioRoutes from './routes/usuariosRoutes'; 

class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);

        const allowedOrigins = ['https://dominio1.com', 'https://dominio2.com'];

        this.app.use(cors({
            origin: function (origin, callback) {
                if (!origin || allowedOrigins.includes(origin)) {
                    callback(null, true);
                } else {
                    callback(new Error('Origen no permitido por la política de CORS'));
                }
            }
        }));

        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/multas', multasRoutes);
        this.app.use('/api/prestamos', prestamosRoutes);
        this.app.use('/api/books', booksRoutes);
        this.app.use('/api/usuarios', usuarioRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();
