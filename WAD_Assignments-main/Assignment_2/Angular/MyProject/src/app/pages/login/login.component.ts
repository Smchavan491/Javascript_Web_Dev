import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Include RouterModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj:loginModel = new loginModel();
}

export class loginModel{
  
  email:string;
  password:string;
  constructor(){
    
    this.email ="";
    this.password ="";
  }
}