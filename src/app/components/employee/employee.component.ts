import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { AppService } from 'src/app/service/app.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit, OnDestroy {
  //lifecycle hooks onInitializer gets called after the constructor
  employee: Employee[];
  contactDetails: string;
  contactStatus : boolean;

  constructor(private employeeService: EmployeeService, private appService: AppService) {
    this.employee = this.employeeService.getEmployeeData();
    this.contactDetails = "ashhar@gmail.com <br> Phone no: 9869786844";
    this.contactStatus = false;
  }

  showContact() {
    this.contactStatus = !this.contactStatus;
  }
  ngOnInit(): void {
    this.appService.employee$.next(this.employee)
    this.appService.employee$.subscribe(data  => {
      this.employee = data;
    });
  }

  ngOnDestroy(): void {}
}
