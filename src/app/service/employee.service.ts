import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { employee_data } from '../data/employee-data';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employee: Employee[];

  constructor() {
    this.employee = employee_data;
  }
  public getEmployeeData(): Employee[] {
    return this.employee;
  }
}
