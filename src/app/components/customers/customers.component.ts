import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { faShop} from '@fortawesome/free-solid-svg-icons';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { faEye} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-Customers',
  templateUrl: './Customers.component.html',
  styleUrls: ['./Customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers:Customer [] = [];
  faShop = faShop;
  faSearch = faSearch;
  faPlus = faPlus;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faEye = faEye;

  filterValue  = "";
  filterType = "";




  constructor(private bs: CustomersService, private modal:NgbModal,private router: Router,private toast:ToastsService) { }

  ngOnInit(): void {
    this.bs.getCustomers().subscribe((customersData: Customer[]) =>{
      this.customers = customersData;
    })
  }


  deleteCustomer (customer: Customer) : void
  {
    if (confirm("Are you sure you want to delete the customer " + customer.firstName + " " + customer.lastName + " ?"))
    {
      this.bs.deleteCustomer(customer)
      .then(()=>{
        this.toast.toastsSuccess("Customer has been deleted successfully")
      })
      .catch((error)=>{console.log(error);
      })
    }
  }



  filter (id:string) {

    var inputValue = (<HTMLInputElement>document.getElementById(id)).value;

    this.filterValue = inputValue;
    this.filterType = id;

    console.log(this.filterValue);

  }

}
