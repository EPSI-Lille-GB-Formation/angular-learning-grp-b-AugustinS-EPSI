import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BOOKS } from './mock/mock-books';
import { USERS } from './mock/mock-users'; 
import { CATEGORIES } from './mock/mock-categories'; 
import { PAGES } from './mock/mock-pages';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const books = BOOKS;
    const users = USERS;
    const categories = CATEGORIES;
    const pages = PAGES;

    return { books, users, categories, pages };
  }
}
