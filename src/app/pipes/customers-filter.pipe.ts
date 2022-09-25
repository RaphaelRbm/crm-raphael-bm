import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/Customer';
@Pipe({
  name: 'customerFilter'
})
export class CustomersPipe implements PipeTransform {

  transform(customers: Array<Customer>, filterType : string, filterValue:string){

    if (customers && customers.length){

        return customers.filter(customer =>{
            if ((filterType == "fnInput") && customer.firstName.toLowerCase().indexOf(filterValue.toLowerCase()) === -1){
                return false;
            }
            if ((filterType == "lnInput") && customer.lastName.toLowerCase().indexOf(filterValue.toLowerCase()) === -1){
                return false;
            }
            if ((filterType == "phoneInput") && customer.phone.toLowerCase().indexOf(filterValue.toLowerCase()) === -1){
                return false;
            }
            return true;
       })
    }
    else{
        return customers;
    }
}

}
