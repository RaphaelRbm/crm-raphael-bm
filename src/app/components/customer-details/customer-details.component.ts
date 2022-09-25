import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastsService } from 'src/app/services/toasts.service';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { faShop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {


  id:string = "";
  faShop = faShop;
  customer: Customer = {id:'', firstName: '', lastName: '', phone: '', email: '',address:'', notes:'' };
  faPenToSquare = faPenToSquare;



  constructor(private _Activatedroute:ActivatedRoute, private cs: CustomersService,private as:AuthService ,private router: Router,private toast: ToastsService) { }


  ngOnInit(): void {

    this.id = this._Activatedroute.snapshot.paramMap.get("id") || "";

    if(this.id)
    {
       this.cs
      .getCustomerByID(this.id)
      .subscribe((customerData: Customer) =>{this.customer = customerData})
    }
  }


  updateCustomer () : void
  {

    this.cs.updateCustomer(this.customer)
    .then(()=>{
      this.toast.toastsSuccess("Customer has been updated successfully")
      this.router.navigateByUrl("/customers")
    })
    .catch((error)=>{console.log(error);
    })
  }

}


