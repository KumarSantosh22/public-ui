import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  static openSidebar = false;

  static toggleSidebar(flag: boolean) {
    this.openSidebar = flag;
  }

}
