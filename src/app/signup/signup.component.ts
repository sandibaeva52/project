import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../auth/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private authService: AuthService, private router: Router) { }

  register(form) {
    console.log(form.value);
    this.authService.signup(form.value).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }
}
