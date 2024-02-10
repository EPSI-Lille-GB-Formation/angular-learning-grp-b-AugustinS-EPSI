import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe Router
import { AccueilComponent } from '../accueil/accueil.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [AccueilComponent, ConnexionComponent,FormsModule],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  newUser = {
    firstname: '', 
    lastname: '',
    email: '',
    password: '',
    role: 'user',
  };
  constructor(private router: Router, private userService: UserService) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }

  onSubmit() {
    
    this.userService.createUser(this.newUser as any, /* currentUserId */).subscribe({
      next: (user) => {
        this.router.navigate(['/connexion']);
      },
      error: (error) => {
        console.error("Erreur lors de l'inscription", error);
        alert("Erreur lors de l'inscription");
      }
    });
  }
}
