import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ConfigService } from 'src/app/shared/config.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  config = ConfigService;
  showClass = 0;
  rotateClass = 0;
  activeindex = 0;

  constructor() { }

  ngOnInit(): void {
    // this.customJquery();
  }

  // customJquery() {
  //   $('.btn').click(function () {
  //     $(this).toggleClass("click");
  //     $('.sidebar').toggleClass("show");
  //   });


  //   $('.sidebar ul li a').click(function () {
  //     var id = $(this).attr('id');
  //     $('nav ul li ul.item-show-' + id).toggleClass("show");
  //     $('nav ul li #' + id + 'span').toggleClass("rotate");

  //   });

  //   $('nav ul li').click(function () {
  //     $(this).addClass("active").siblings().removeClass("active");
  //   });
  // }

  toggleSidebar() {
    if (this.config.openSidebar) {
      document.getElementsByClassName('sidebar')[0].classList.add('show');
    }
  }

  addClassShow(id: number) {
    this.showClass = id;
    this.activeindex = id;
    // alert(id);
  }

  roateClassShow(id: number) {
    this.rotateClass = id;
  }

  closeSidebar() {
    this.config.openSidebar = !this.config.openSidebar;
  }
}
