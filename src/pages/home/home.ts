import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Session } from '../../providers/sessions/session';
import { BusinessPage } from '../common/base/BusinessPage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BusinessPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private session: Session) {
    super();
  }

  OnInitialize() {
  }
}
