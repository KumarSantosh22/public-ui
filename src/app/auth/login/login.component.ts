import { AfterContentInit, AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  signInMode = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    // console.log('form', form);
    // console.log('model', this.model);
    if (!this.signInMode) {
      localStorage.setItem('signUp', JSON.stringify(this.model));
      this.router.navigateByUrl('auth/signup/next-step');
    }
  }

  cancel() {

  }

  changeMode() {
    this.signInMode = !this.signInMode;
  }


}
