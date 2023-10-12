import  { Router } from 'express';

import prestamosController from '../controllers/prestamosControllers';

class PrestamoRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', prestamosController.list);
        this.router.get('/:id', prestamosController.getOne);
        this.router.post('/', prestamosController.create);
        this.router.put('/:id', prestamosController.update);
        this.router.delete('/:id', prestamosController.delete);
    }

}

export default new PrestamoRoutes().router;