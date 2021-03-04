import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../services/resources.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private _resources: ResourcesService) { }
  message:string;
  ordersList: any;
  getOrder(){
    this._resources.getOrders().then((response: any) => {
      this.ordersList = response;
    })
    .catch(error => {
      console.log(error);
        if (error.status == 500) {
            this.message = error;
        }
    })
  }
  ngOnInit(): void {
    this.getOrder();
  }
}
