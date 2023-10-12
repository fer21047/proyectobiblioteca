import { Request, Response } from 'express';
import pool from '../database';

class BooksController {

    public async list(req: Request, res: Response): Promise<void> {
        const books = await pool.query('SELECT * FROM book');
        res.json(books);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const books = await pool.query('SELECT * FROM book WHERE id = ?', [id]);
        console.log(books.length);
        if (books.length > 0) {
            return res.json(books[0]);
        }
        res.status(404).json({ text: "El libro especificado no existe" });
    } 

    public async update(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE book set ?  WHERE id = ?',[req.body,id]);
        res.json({message: 'La actividad se actualizo'});
      }

    public async create(req: Request, res: Response):Promise<void> {
        console.log(req.body);
       await pool.query('INSERT INTO book set ?', [req.body]);
        res.json({ message: 'Nuevo libro guardado' });
    }

  

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM book WHERE id = ?', [id]);
        res.json({ message: "El libro ha sido eliminado" });
    }
}

const booksController = new BooksController;
export default booksController;
