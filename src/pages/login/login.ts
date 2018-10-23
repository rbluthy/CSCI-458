import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

import { AboutPage } from '../../pages/about/about';
import { ContactPage } from '../../pages/contact/contact';
import { HomePage } from '../../pages/home/home';

import { StandingsPage } from '../../pages/standings/standings';
import { TeamsPage } from '../../pages/teams/teams';
import { User } from 'firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.navCtrl.push(TabsPage);
  }

  register()
  {
    this.navCtrl.push("RegisterPage");
  }
}
