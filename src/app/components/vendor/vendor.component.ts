import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css'],
})
export class VendorComponent implements OnInit {
  employeeForm : FormGroup;
  employeeArry : Employee[] = [];

  constructor(private appService: AppService, private route: Router) {
    this.employeeArry = [];
  }
  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
    });
  }

  OnEmployeeFormSubmit() {
    let emp : Employee = {
      id: this.employeeForm.value.id,
      name: this.employeeForm.value.name,
      age: this.employeeForm.value.age,
    }
    this.employeeArry = this.appService.employee$.getValue();
    this.employeeArry.push(emp);
    this.appService.employee$.next(this.employeeArry);
    this.route.navigateByUrl("/")
  }
}

//Reactive Forms Module
