import { Request, Response } from 'express';
import pool from '../database';

class AuthController {

    public async login(req: Request, res: Response): Promise<void> {
        const { correo, Password } = req.body;
        console.log('Correo recibido:', correo);
        console.log('Contraseña recibida:', Password);
        console.log(req.body);


        // Buscar al usuario con el correo proporcionado
        const usuarios = await pool.query('SELECT * FROM Usuario WHERE Correo = ? AND Password = ?', [correo, Password]);

        
        // Si no encontramos al usuario o la contraseña es incorrecta, respondemos con error
        if (usuarios.length === 0 || usuarios[0].Password.trim() !== Password.trim()) {
            res.status(401).json({ text: 'Las credenciales son incorrectas' });
            return;
        }else {    
            // Si todo está bien, devolvemos el usuario (sin enviar la contraseña al cliente)
            const userToSend = { ...usuarios[0] };
            delete userToSend.Password;
            res.json({ success: true, user: userToSend });
            return; // Asegurarse de que la función finalice aquí
        }
    }

}

const authController = new AuthController(); 
export default authController;
