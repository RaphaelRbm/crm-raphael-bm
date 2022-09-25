import { Injectable } from '@angular/core';
import {getDoc , addDoc, collectionData, deleteDoc, doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { collection, DocumentReference } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/Customer';



@Injectable({
  providedIn: 'root'
})
export class CustomersService {


  customersRef = collection(this.fs,"customers");

  constructor(private fs: Firestore) {

   }

   addCustomer(customer: Customer) : Promise<DocumentReference<Customer>> {
    return addDoc(this.customersRef, customer) as Promise<DocumentReference<Customer>> ;
  }

  getCustomers(): Observable<Customer[]> {
    return collectionData(this.customersRef, { idField: 'id' }) as Observable<Customer[]>;
  }

  deleteCustomer (customer:Customer) : Promise<void>
  {
    const customersRef = doc(this.fs, 'customers/' + customer.id)
    return deleteDoc (customersRef) as Promise<void>
  }

  updateCustomer (customer:Customer) : Promise<void>
  {
    const customersRef = doc(this.fs, 'customers/' + customer.id)
    return setDoc(customersRef,customer) as Promise<void>
  }

  getCustomerByID(id : string): Observable<Customer>
   {
    const customersRef = doc(this.fs, 'customers/' + id)
    return docData(customersRef, { idField: 'id' }) as Observable<Customer>;
  }

}

