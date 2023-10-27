import { Router } from 'express';
import authController from '../controllers/authController';

class AuthRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        // Ruta específica para el login (cambia de GET a POST)
        this.router.post('/', authController.login);
    }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;
