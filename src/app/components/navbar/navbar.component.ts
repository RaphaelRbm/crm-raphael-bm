import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { faAddressCard} from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interfaces/User';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  email : String = "";
  faUser = faUser;
  faRightFromBracket = faRightFromBracket;
  faAddressCard = faAddressCard;

  constructor(private _Activatedroute:ActivatedRoute,private as : AuthService, private router: Router,private dialog: MatDialog,private us: UsersService) { }

  ngOnInit(): void {
   this.email =  this.as.getSessionData("email");

  }

  logout () : void
  {
    if(confirm("Are you sure you want to logout ?")) {
      this.as.logout()
      .then(()=>
      {
        this.router.navigateByUrl('login');
        this.as.setSessionData("loggedIn","false")

      })
      .catch((error)=>{console.log(error);
      })    }


  }

  isLoggedIn () : Boolean
  {
    return this.as.getSessionData("loggedIn") == "true";
  }



}
