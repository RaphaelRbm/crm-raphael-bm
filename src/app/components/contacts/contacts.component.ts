import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ToastsService } from 'src/app/services/toasts.service';
import { Contact } from 'src/app/interfaces/Contact';
import { ContactsService } from 'src/app/services/contacts-service.service';
import { faAddressBook} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-Customers',
  templateUrl: './Contacts.component.html',
  styleUrls: ['./Contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts:Contact [] = [];
  faSearch = faSearch;
  faAddressBook = faAddressBook;
  filterValue: string = "";

  constructor(private cs: ContactsService, private modal:NgbModal,private router: Router,private toast:ToastsService) { }

  ngOnInit(): void {

    this.contacts = this.cs.getAll();
  }

}
