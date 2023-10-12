import express, { Router } from 'express';
import multasController from '../controllers/multasController'; // Update the import to use MultasController

class MultaRoutes { // Rename the class to MultaRoutes
    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', multasController.list); // Update the controller to use multasController
        this.router.get('/:idMulta', multasController.getOne); // Update the controller to use multasController
        this.router.post('/', multasController.create); // Update the controller to use multasController
        this.router.put('/:idMulta', multasController.update); // Update the controller to use multasController
        this.router.delete('/:idMulta', multasController.delete); // Update the controller to use multasController
    }

}

const multaRoutes = new MultaRoutes(); // Rename the variable
export default multaRoutes.router;