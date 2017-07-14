import { Component, Input } from '@angular/core';

@Component({
  selector: 'amc-navbar',
  templateUrl: 'ammic-navbar.html'
})
export class AmmicNavbarComponent {
  @Input() title: string;
  constructor() { }
}
