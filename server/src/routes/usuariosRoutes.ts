import express, { Router } from 'express';

import usuariosController from '../controllers/usuariosController'; 

class UsuarioRoutes { 
    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', usuariosController.list); 
        this.router.get('/:idUsuario', usuariosController.getOne); 
        this.router.post('/', usuariosController.create); 
        this.router.put('/:idUsuario', usuariosController.update); 
        this.router.delete('/:idUsuario', usuariosController.delete); 
        this.router.post('/login', usuariosController.login);
    }
}

const usuarioRoutes = new UsuarioRoutes(); 
export default usuarioRoutes.router; 

