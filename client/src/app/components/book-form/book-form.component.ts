import { Component, OnInit, HostBinding } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BooksService } from 'src/app/services/books.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  book: Book = {
    id: 0,
    Titulo: '',
    Editorial: '',
    FechaRegistro: new Date(), // Cambiado FechaPu a FechaRegistro
    Categoria: '',             // Cambiado IdCategoria a Categoria
    Autor: '',                // Cambiado IdAutor a Autor
    Piezas: 0,
    // Removí la propiedad 'Ubicacion' ya que no estaba en tu última definición de tabla
  };

  edit: boolean = false;

  constructor(private bookService: BooksService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.bookService.getBook(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.book = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewBook() {
    delete this.book.id;
    this.bookService.saveBook(this.book)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/books']);
        },
        err => console.error(err)
      )
  }

  updateBook() {
    if (this.book.id !== undefined) {
      this.bookService.updateBook(this.book.id, this.book)
        .subscribe(
          res => { 
            console.log("Update successful:", res);
            this.router.navigate(['/books']);
          },
          err => console.error("Update error:", err)
        )
    }
  }
}  
