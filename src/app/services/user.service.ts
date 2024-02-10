import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { User } from './Entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';

  constructor(private http: HttpClient) {}


  getAllUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.usersUrl);
  }

  
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }


  createUser(user: User, currentUserId?: number): Observable<User> {    
    return this.http.post<User>(this.usersUrl, user);
  }

 
  updateUser(user: User, currentUserId: number): Observable<User> {

    if (user.id !== currentUserId && !this.isAdmin(currentUserId)) {
      return throwError(() => new Error('Unauthorized'));
    }
    return this.http.put<User>(`${this.usersUrl}/${user.id}`, user);
  }


  deleteUser(id: number, currentUserId: number): Observable<User> {
    if (!this.isAdmin(currentUserId)) {
      return throwError(() => new Error('Unauthorized'));
    }
    return this.http.delete<User>(`${this.usersUrl}/${id}`);
  }
  

  private isAdmin(userId: number): boolean {
    const adminUsers: number[] = [];
    return adminUsers.includes(userId);
  }

}
