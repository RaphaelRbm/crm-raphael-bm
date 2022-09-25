import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomersComponent } from './components/customers/customers.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CustomersPipe } from './pipes/customers-filter.pipe';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactPipe } from './pipes/contacts-filter.pipe';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    CustomersComponent,
    CustomersPipe,
    AddCustomerComponent,
    EditCustomerComponent,
    CustomerDetailsComponent,
    ContactsComponent,
    ContactPipe,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HotToastModule.forRoot(),
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule ,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule ,
    MatCardModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




