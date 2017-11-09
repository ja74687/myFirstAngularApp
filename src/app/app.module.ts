import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {UserService} from './user.service';
import {MyguardGuard} from './myguard.guard';


const appRutes:Routes = [
     {
      path: '',
      component:LoginComponent 
    },
    {
      path:'dashboard',
      canActivate: [MyguardGuard],
      component:DashboardComponent      
    }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRutes),
    BrowserModule
  ],
  providers: [UserService, MyguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
