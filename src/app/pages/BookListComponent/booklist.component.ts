import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { UserService } from '../../services/user.service'; 
import { Book } from '../../services/Entity/book';
import { User } from '../../services/Entity/user';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  searchText: string = '';
  users: User[] = [];

  constructor(private bookService: BookService, private userService: UserService, private router: Router,) {} 

  ngOnInit() {
    this.getBooksAndAuthors();
  }

  getBooksAndAuthors(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
      this.bookService.getAllBooks().subscribe(books => {
        this.books = books.map(book => {
          const author = this.users.find(user => user.id === book.authorId);
          return {
            ...book,
            authorName: author ? `${author.firstname} ${author.lastname}` : 'Auteur inconnu'
          };
        });
      }, error => {
        console.error('Erreur détectée !', error);
      });
    });
  }


  searchBooks(): void {
    if (this.searchText) {
      this.bookService.searchBooksByTitle(this.searchText)
        .subscribe((data: Book[]) => {
          this.books = data.map(book => {
            const author = this.users.find(user => user.id === book.authorId);
            return {
              ...book,
              authorName: author ? `${author.firstname} ${author.lastname}` : 'Auteur inconnu'
            };
          });
        }, error => {
          console.error('There was an error!', error);
        });
    } else {
      this.getBooksAndAuthors(); 
    }
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/connexion']);
  }
  
  goToBookDetail(bookId: number) {
    this.router.navigate(['/book', bookId]);
  }

  goContributionsPage(){
    this.router.navigate(['/contributions'])
  }
  goProfilPage(){
    this.router.navigate(['/profil'])
  }
  goBooksPage(){
    this.router.navigate(['/books'])
  }
}
