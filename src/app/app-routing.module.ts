import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService} from './auth/service/auth-guard.service';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeContactComponent } from './components/employee-contact/employee-contact.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductComponent } from './components/product/product.component';
import { VendorComponent } from './components/vendor/vendor.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  {
    path: 'employee',
    component: EmployeeComponent,
    children: [
      { path: 'employee-contact/:eid', component: EmployeeContactComponent },
    ],
  },
  { path: 'employee-details/:eid', component: EmployeeDetailsComponent, canActivate: [AuthGuardService]},
  { path: 'customer', component: CustomerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vendor', component: VendorComponent , canActivate: [AuthGuardService]},
  { path: 'product', component: ProductComponent , canActivate: [AuthGuardService]},
  { path: '**', component: PageNotFoundComponent }, // for all paths except defined (default path)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
