import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = {id:'', firstName: '', lastName: '', phone: '', email: '',address:'', notes:'' };
  faPlus = faPlus;

  constructor(private cs: CustomersService,private as:AuthService ,private router: Router,private toast: ToastsService) { }


  ngOnInit(): void {
  }

  onSubmit () : void
  {
    this.cs.addCustomer(this.customer)
    .then(()=>
    {
      this.toast.toastsSuccess("Customer was added successfully")
      this.router.navigateByUrl("/customers")
    })

    .catch((error)=>{console.log(error);
    })
  }

}


