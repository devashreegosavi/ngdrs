import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imageemblem = 'assets/embelem1.png';
  altText = 'Example Image';

  constructor(public auth : AuthService, private router : Router){

  }

  onLogin(){
    this.auth.login();
  }

  onLogout(){
    this.auth.logout();
    this.router.navigate(['/home']);
  }
}
