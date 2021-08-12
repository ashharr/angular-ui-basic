import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  pointsForm!: FormGroup;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.pointsForm = new FormGroup({
      points: new FormControl('', [Validators.required]),
    });
  }
  OnPointFormSubmit() {
      console.log(this.pointsForm.value);
      this.appService.points$.next(this.pointsForm.value.points);
    }
  }

