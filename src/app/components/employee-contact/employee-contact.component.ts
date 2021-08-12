import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employee-contact',
  templateUrl: './employee-contact.component.html',
  styleUrls: ['./employee-contact.component.css']
})
export class EmployeeContactComponent implements OnInit {

  eid!: string;
  constructor(private actRoute: ActivatedRoute){ }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params:Params) =>{
      this.eid = params.get('eid');
      });
  }

}
