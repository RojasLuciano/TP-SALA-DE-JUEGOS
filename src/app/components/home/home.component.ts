import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

userLogged = this.auth.getAuth();
showLogout = false;

  constructor(
    private auth: AuthService,
    
  ) { 

  }

  logout() {
    this.auth.logout();
  }

  toggleLogout(): void {
    this.showLogout = !this.showLogout;
  }

  ngOnInit(): void {
    this.auth.getAuth().subscribe(user => {
      if (user) {

      } else {
        this.auth.logout();
      }
    }
    );

  }

} // End class
