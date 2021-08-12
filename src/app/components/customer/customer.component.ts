import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  points: number;
  constructor(private appService: AppService) {
    this.points = 0;
  }

  ngOnInit(): void {
  this.appService.points$.subscribe(data => {
    this.points =+ data;
  })
  }

}
