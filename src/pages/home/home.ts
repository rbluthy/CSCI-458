import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AlertController} from 'ionic-angular';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alerCtrl: AlertController) { }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Login Alert!',
      message: 'Not implemented yet!',
      buttons: ['Ok']
    });
    alert.present()
  }

}
