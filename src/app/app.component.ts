import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'public-ui';
  activateAuth: boolean = false;

  ngOnInit() {
    console.log(window.location.pathname);
    if (window.location.pathname.startsWith('/auth')) {
      this.activateAuth = true;
    }
  }
}
