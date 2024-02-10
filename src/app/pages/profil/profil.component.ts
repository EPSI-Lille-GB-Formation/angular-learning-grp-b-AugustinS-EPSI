import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../services/Entity/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  currentUser!: User;


  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      this.currentUser = JSON.parse(userJson);
    } else {
      this.router.navigate(['/connexion']);
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

  
  saveChanges() {
    if (this.currentUser) {
      localStorage.setItem('user', JSON.stringify(this.currentUser));
  
}

  }
}
