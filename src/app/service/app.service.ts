import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public points$ = new BehaviorSubject<string>('');
  public employee$ = new BehaviorSubject<Employee[]>([]);
  // public empl$ = new BehaviorSubject<>
}
