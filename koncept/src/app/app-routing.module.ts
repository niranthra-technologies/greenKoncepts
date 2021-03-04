import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  {path:'signin',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'customers',component:CustomersComponent},
  {path:'orders',component:OrdersComponent},
  {path:'',redirectTo:'signin',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
