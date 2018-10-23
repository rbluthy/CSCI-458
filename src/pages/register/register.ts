
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../assets/models/user';

import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [AngularFireAuth]
})
export class RegisterPage {

  user = {} as User;

  constructor( private afauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

 
  async register(user: User){
   try{
   const result = this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password);
   console.log(result);
   }
  
  catch(e){
    console.error(e);
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad RegisterPage');
  // }
}
}
