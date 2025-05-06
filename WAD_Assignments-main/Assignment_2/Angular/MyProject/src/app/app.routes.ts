import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'Register',
        pathMatch: 'full'
    },
    
    {
        path: 'Login',
        component: LoginComponent
    },

    {
        path: 'Register',
        component: RegisterComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }