import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/Contact';
@Pipe({
  name: 'contactsFilter'
})
export class ContactPipe implements PipeTransform {

  transform(contacts: Array<Contact>, filterValue:string){

    if (contacts && contacts.length){

        return contacts.filter(contact =>{
            if (contact.name.toLowerCase().indexOf(filterValue.toLowerCase()) === -1){
                return false;
            }
            return true;
       })
    }
    else{
        return contacts;
    }
}

}
