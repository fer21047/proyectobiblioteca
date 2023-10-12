import { Component, OnInit, HostBinding } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  books: any = [];

  constructor(private bookService: BooksService) { }


  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks()
      .subscribe(
        res => {
          this.books = res;
        },
        err => console.error(err)
      );
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id)
      .subscribe(
        res => {
          console.log(res);
          this.getBooks();
        },
        err => console.error(err)
      )
  }

}