import { Injectable, NgModule } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { Book } from './Entity/book'; // Assurez-vous d'ajuster le chemin d'importation selon votre structure de projet
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class BookService {
  private booksUrl = 'api/books'; 
  constructor(private http: HttpClient) {}

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.booksUrl}/${book.id}`, book);
  }


  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.booksUrl}/${id}`);
  }

  searchBooksByTitle(searchTerm: string): Observable<Book[]> {
    return this.getAllBooks().pipe(
      map(books => books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase())))
    );
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }


  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.booksUrl}/${id}`);
  }


  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book);
  }

 
getBooksByAuthor(authorId: number): Observable<Book[]> {
  return this.http.get<Book[]>(this.booksUrl).pipe(
    map(books => books.filter(book => book.authorId === authorId))
  );
}

}
