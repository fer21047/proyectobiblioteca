import { Request, Response } from 'express';
import pool from '../database';

class PrestamosController {

    public async list(req: Request, res: Response): Promise<void> {
        const prestamos = await pool.query('SELECT * FROM prestamo'); // Cambio de "prestamo" a "prestamos"
        res.json(prestamos);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const prestamo = await pool.query('SELECT * FROM prestamo WHERE IdPrestamo = ?', [id]); // Cambio de "prestamo" a "prestamos"
        console.log(prestamo.length);
        if (prestamo.length > 0) {
            return res.json(prestamo[0]);
        }
        res.status(404).json({ text: "The prestamo doesn't exist" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO prestamo set ?', [req.body]); // Cambio de "prestamo" a "prestamos"
        res.json({ message: 'Prestamo Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE prestamo set ? WHERE IdPrestamo = ?', [req.body, id]); // Cambio de "prestamo" a "prestamos"
        res.json({ message: "The prestamo was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM prestamo WHERE IdPrestamo = ?', [id]); // Cambio de "prestamo" a "prestamos"
        res.json({ message: "The prestamo was deleted" });
    }
}

const prestamosController = new PrestamosController();
export default prestamosController;