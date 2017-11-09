import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private userLoggedIn;
  private userName;
  constructor() {
    this.userLoggedIn = false;
   }

   setUserLogged(){
      this.userLoggedIn = true;
   }
   getUserLogged(){
      return this.userLoggedIn;
   }



}
