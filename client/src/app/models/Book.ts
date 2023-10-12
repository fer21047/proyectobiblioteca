
export interface Book {
    id?: number; // El '?' indica que es opcional, ya que se autoincrementará en la base de datos.
    Titulo: string;
    Editorial: string;
    FechaRegistro: Date;
    Categoria: string;
    Autor: string;
    Piezas: number;
}
