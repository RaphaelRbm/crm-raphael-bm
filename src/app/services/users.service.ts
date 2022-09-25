import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users : User [] = [];

  isLoggedIn : boolean = false;
  constructor(private fs:Firestore) {
    sessionStorage.setItem("isLoggedIn", "false");
  }

  getUsers(): any {
    return this.users;
  }


  getUserByID(id : string): Observable<User>
   {
    const usersRef = doc(this.fs, 'users/' + id)
    return docData(usersRef, { idField: 'id' }) as Observable<User>;
  }

  setLoggedIn (value : boolean ) : void
  {
    sessionStorage.setItem("isLoggedIn", "" + value);
  }

  getLoggedIn () : any
  {
    return sessionStorage.getItem("isLoggedIn");
  }
}
