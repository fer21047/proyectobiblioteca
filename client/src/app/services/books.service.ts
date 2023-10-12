import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {  // Especificar tipo Book[]
    return this.http.get<Book[]>(`${this.API_URI}/books`);
  }

  getBook(id: string): Observable<Book> {  // Especificar tipo Book
    return this.http.get<Book>(`${this.API_URI}/books/${id}`);
  }

  deleteBook(id: string): Observable<void> {  // Especificar tipo void si no esperas respuesta
    return this.http.delete<void>(`${this.API_URI}/books/${id}`);
  }

  saveBook(book: Book): Observable<Book> {  // Especificar tipo Book
    return this.http.post<Book>(`${this.API_URI}/books`, book);
  }

  updateBook(id: string|number, updatedBook: Book): Observable<Book> {
    return this.http.put<Book>(`${this.API_URI}/books/${id}`, updatedBook);
  }

}
