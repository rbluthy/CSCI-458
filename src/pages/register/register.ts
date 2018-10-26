
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../../pages/login/login';

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
})
export class RegisterPage {

<<<<<<< HEAD

	@ViewChild('username') user;
	@ViewChild('password') password;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }



  registerUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
    .then(data => {
      console.log('got data ', data);
      this.navCtrl.setRoot( LoginPage );
    })
    .catch(error => {
      console.log('got an error ', error);
      
  
    });
  	console.log('Would register user with ', this.user.value, this.password.value);
  }

}
=======
  

  constructor( public afauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

   user = {} as User;
   register(user: User){
   try{
   const result = this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password);
   console.log(result);
   }
  
  catch(e){
    console.error(e);
    console.log('ionViewDidLoad RegisterPage');
  }
  // ionViewDidLoad() {
  //   
  // }
}
}
>>>>>>> Ignore This
