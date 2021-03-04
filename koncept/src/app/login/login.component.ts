import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResourcesService } from '../services/resources.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message:string;
  constructor(private router: Router, private _resources: ResourcesService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }


  login(){
    var obj = {
      'username': this.loginForm.controls['username'].value,
      'password': this.loginForm.controls['password'].value,
    }
    this._resources.validateUser(obj).then((response: any) => {
      this.router.navigate(['home']);
    })
    .catch(error => {
      console.log(error);
        if (error.status == 500) {
            this.message = error;
        }
    })
  }
  logout(){
    alert();
    this.router.navigate(['signin']);
  }
}
