import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userNameLoggedIn:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userNameLoggedIn = localStorage.getItem('userName');
  }
  logout(){
    this.router.navigate(['signin']);
    localStorage.removeItem('userName');
  }
}
