import { Component, HostListener, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  scrollPos = 0;
  config = ConfigService;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: any) {
    this.scrollPos = window.scrollY;
  }

  toggleSidebar() {
    this.config.openSidebar = !this.config.openSidebar;
  }

}
