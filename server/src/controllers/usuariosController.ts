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
        await pool.query('INSERT INTO Usuario set ?', [req.body]); 
        res.json({ message: 'Nuevo usuario guardado' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { idUsuario } = req.params;
        await pool.query('DELETE FROM Usuario WHERE IdUsuario = ?', [idUsuario]); 
        res.json({ message: "El usuario ha sido eliminado" });
    }

    public async login(req: Request, res: Response): Promise<void> {
        const { correo, password1 } = req.body;
        
        // Buscar al usuario con el correo proporcionado
        const usuarios = await pool.query('SELECT * FROM Usuario WHERE Correo = ?', [correo]);
        
        // Si no encontramos al usuario o la contraseña es incorrecta, respondemos con error
        if (usuarios.length === 0 || usuarios[0].Password !== password1) {  // Asumiendo que "Password" es el nombre de la columna de contraseña en tu tabla.
            return res.status(401).json({ text: 'Las credenciales son incorrectas' });
        }
        
        // Si todo está bien, devolvemos el usuario (sin enviar la contraseña al cliente)
        const userToSend = { ...usuarios[0] };
        delete userToSend.Password;
        res.json(userToSend);
    }

}

const usuariosController = new UsuariosController(); 
export default usuariosController;
