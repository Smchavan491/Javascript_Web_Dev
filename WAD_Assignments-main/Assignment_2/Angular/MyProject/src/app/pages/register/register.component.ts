import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Include RouterModule
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerObj:registerModel = new registerModel();
}

export class registerModel{
  name:string;
  email:string;
  password:string;
  constructor(){
    this.name ="";
    this.email ="";
    this.password ="";
  }
}
