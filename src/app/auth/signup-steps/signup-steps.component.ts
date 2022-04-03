import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-steps',
  templateUrl: './signup-steps.component.html',
  styleUrls: ['./signup-steps.component.scss']
})
export class SignupStepsComponent implements OnInit {
  model: any = {};
  items = [
    { label: 'Personal Information' },
    { label: 'Other Information' },
  ]
  genders = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
    { name: 'Other', value: 'other' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

  }

}
