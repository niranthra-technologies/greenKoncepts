import { Injectable } from '@angular/core';
import { CommunicationService } from './communication.service';


@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(protected _communications: CommunicationService) { }

  validateUser = (obj) => {
    let slug = 'https://test.greenkoncepts.com/gktest/login?username=' + obj.username +'&password='+ obj.password;
    return this._communications.get(slug);
  }

  getOrders = () =>{
    let slug = 'https://test.greenkoncepts.com/gktest/getAllOrders?token=' + localStorage.getItem('key');
    return this._communications.get(slug);
  }

  saveCustomerDetails = (obj) => {
    let slug = 'https://test.greenkoncepts.com/gktest/createCustomer?token=' + localStorage.getItem('key');
    return this._communications.post(slug, obj);
  }
}
