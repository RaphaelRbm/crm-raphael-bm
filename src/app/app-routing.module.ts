import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomersComponent } from './components/customers/customers.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component:LoginComponent},
  { path: 'customers', component:CustomersComponent, canActivate:[AuthGuard]},
  { path: 'add-customer', component:AddCustomerComponent, canActivate:[AuthGuard]},
  { path: 'edit-customer/:id', component:EditCustomerComponent, canActivate:[AuthGuard]},
  { path: 'customer-details/:id', component:CustomerDetailsComponent, canActivate:[AuthGuard]},
  { path: 'contacts', component:ContactsComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
