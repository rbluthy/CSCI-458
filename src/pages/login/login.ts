import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


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

	@ViewChild('username') user;
	@ViewChild('password') password;

  constructor(private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  

  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      
      this.navCtrl.setRoot( TabsPage );
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error);
      
    })
  	console.log('Would sign in with ', this.user.value, this.password.value);
  }
  register()
  {
    this.navCtrl.push('RegisterPage');
  }
  
}
