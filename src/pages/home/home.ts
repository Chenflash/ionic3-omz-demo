import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Session } from '../../providers/sessions/session';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private session: Session) {
  }

  ngOnInit() {
  }
}
