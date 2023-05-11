import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userLogged = this.auth.getAuth();

  constructor(private router: Router,
    private auth: AuthService,
    ) {}

  showNavbar(): boolean {
    return this.router.url !== '/login' && this.router.url !== '/register-user';
  }

  logout() {
    this.auth.logout();
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

}
