import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';
import { Observable, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private authService: AuthService, private router: Router) {

  }

  login(form){
    console.log(form.value);
    this.authService.signIn(form.value).subscribe((res) =>{
      console.log('Logged in!');
      this.router.navigateByUrl('home');
    });
  }


}
