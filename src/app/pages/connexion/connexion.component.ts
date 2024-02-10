import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { USERS } from '../../services/mock/mock-users';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private userService: UserService) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }

  onSubmit() {
    const validUser = USERS.find(u => u.email === this.user.email && u.password === this.user.password);
    if (validUser) {
      localStorage.setItem('user', JSON.stringify(validUser));
      this.router.navigate(['/books']);
    } else {
      alert('Identifiants incorrects');
    }
  }
  
}
