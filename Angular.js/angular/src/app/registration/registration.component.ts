import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(private router: Router) {}
    onRegister(){
      console.log('User register successfully');
      this.router.navigate(['login']);
    }

}
