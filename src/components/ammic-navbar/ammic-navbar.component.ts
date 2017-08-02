import { Component, Input } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'amc-navbar',
  templateUrl: 'ammic-navbar.component.html'
})
export class AmmicNavbarComponent {
  @Input('title')
  title: string;
  @Input('showOptions')
  showOptions: boolean = false;

  constructor(
    private menuCtrl: MenuController
  ) { }

  openOption() {
    console.log("show options")
  }
}
