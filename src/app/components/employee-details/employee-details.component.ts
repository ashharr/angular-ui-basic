import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  eid!: number;

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
  this.eid = this.actRoute.snapshot.params['eid'];
  }

}
