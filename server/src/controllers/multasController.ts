import { Request, Response } from 'express';
import pool from '../database';

class MultasController {

    public async list(req: Request, res: Response): Promise<void> {
        try {
            const multas = await pool.query('SELECT * FROM Multas');
            res.json(multas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener las multas' });
        }
    }

    public async getOne(req: Request, res: Response): Promise<void> {
        const { idMulta } = req.params;
        try {
            const multas = await pool.query('SELECT * FROM Multas WHERE IdMulta = ?', [idMulta]);
            if (multas.length > 0) {
                res.json(multas[0]);
            } else {
                res.status(404).json({ error: "La multa especificada no existe" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener la multa' });
        }
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { idMulta } = req.params;
        try {
            const result = await pool.query('UPDATE Multas SET ? WHERE IdMulta = ?', [req.body, idMulta]);
            if (result.affectedRows > 0) {
                res.json({ message: 'La multa se actualizó' });
            } else {
                res.status(404).json({ error: "La multa especificada no existe" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al actualizar la multa' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            const result = await pool.query('INSERT INTO Multas SET ?', [req.body]);
            res.json({ message: 'Nueva multa guardada', id: result.insertId });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear la nueva multa' });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { idMulta } = req.params;
        try {
            const result = await pool.query('DELETE FROM Multas WHERE IdMulta = ?', [idMulta]);
            if (result.affectedRows > 0) {
                res.json({ message: "La multa ha sido eliminada" });
            } else {
                res.status(404).json({ error: "La multa especificada no existe" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al eliminar la multa' });
        }
    }
}

const multasController = new MultasController();
export default multasController;

