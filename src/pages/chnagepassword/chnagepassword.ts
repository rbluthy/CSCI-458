import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ChnagepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chnagepassword',
  templateUrl: 'chnagepassword.html',
})

export class ChnagepasswordPage {


	@ViewChild('email') user;
	@ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChnagepasswordPage');
  }

  

  chnageUser() {
    //this.fire.auth.sendPasswordResetEmail(this.user.value);
    this.navCtrl.push('ResetPage');
  
  	
  }

}
