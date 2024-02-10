
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../services/Entity/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mes-contributions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mes-contributions.component.html',
  styleUrls: ['./mes-contributions.component.css']
})


export class MesContributionsComponent implements OnInit {
  myBooks: Book[] = [];

  constructor(
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit() {
    const authorId = this.getCurrentUserId();
    if (authorId) {
      this.bookService.getBooksByAuthor(authorId).subscribe(books => {
        this.myBooks = books;
      });
    }
  }



  getCurrentUserId(): number {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      return user.id;
    } else {
      return 0;
    }
  }


  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/connexion']);
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
