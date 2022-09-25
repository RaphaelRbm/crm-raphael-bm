import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import { ToastsService } from 'src/app/services/toasts.service';
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user:User = {
    id: "", email: "", password: ""
  };

  faRightFromBracket = faRightFromBracket;
  constructor(private as:AuthService ,private router: Router,private toast: ToastsService) { }

  ngOnInit(): void {

  }

  submitLogin(): void
  {
    this.as.login(this.user)
    .then((data) =>
    {

      this.toast.toastsSuccess("Logged in successfully")
      console.log(data.user.email);
      this.router.navigateByUrl('customers');
      this.as.setSessionData("loggedIn","true")
      this.as.setSessionData("email","" + data.user.email)

    })
    .catch((err) =>
    {
      this.toast.toastsError("Invalid email or password")
      this.user = {id: "", email: "", password: ""};
    });
  }

  submitLoginWithGoogle(): void
  {
    this.as.loginWithGoogle()
    .then((data) =>
    {
      console.log(data.user);
      this.router.navigateByUrl('customers');
      this.as.setSessionData("loggedIn","true")
      this.as.setSessionData("email","" + data.user.email)
    })
    .catch((err) => {
      console.log(err);
     });
  }



}

