import { Request, Response } from 'express';
import pool from '../database';

class UsuariosController {

    public async list(req: Request, res: Response): Promise<void> {
        const usuarios = await pool.query('SELECT * FROM Usuario'); 
        res.json(usuarios);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { idUsuario } = req.params;
        const usuarios = await pool.query('SELECT * FROM Usuario WHERE IdUsuario = ?', [idUsuario]); 
        console.log(usuarios.length);
        if (usuarios.length > 0) {
            return res.json(usuarios[0]);
        }
        res.status(404).json({ text: "El usuario especificado no existe" });
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { idUsuario } = req.params;
        await pool.query('UPDATE Usuario set ?  WHERE IdUsuario = ?', [req.body, idUsuario]); 
        res.json({ message: 'El usuario se actualizó' });
    }

    public async create(req: Request, res: Response):Promise<void> {
        console.log(req.body);
        await pool.query('INSERT INTO Usuario set ?', [req.body]); 
        res.json({ message: 'Nuevo usuario guardado' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { idUsuario } = req.params;
        await pool.query('DELETE FROM Usuario WHERE IdUsuario = ?', [idUsuario]); 
        res.json({ message: "El usuario ha sido eliminado" });
    }
}

const usuariosController = new UsuariosController(); 
export default usuariosController;
