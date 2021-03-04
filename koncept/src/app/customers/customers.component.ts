import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResourcesService } from '../services/resources.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customerForm: FormGroup;
  message:string;
  constructor(private router:Router, private _resources: ResourcesService) { 
    this.customerForm = new FormGroup({
      customername: new FormControl('', [Validators.required]),
      customerage: new FormControl('', [Validators.required]),
      address: new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {
  }

  saveDetails(){
    alert();
    var obj = {
      'customerName': this.customerForm.controls['customername'].value,
      'customerAge': this.customerForm.controls['customerage'].value,
      'customerAddress': this.customerForm.controls['address'].value,
    }
    this._resources.saveCustomerDetails(obj).then((response: any) => {
    })
    .catch(error => {
      console.log(error);
        if (error.status == 500) {
            this.message = error;
        }
    })
  }
  
}
