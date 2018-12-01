import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import {AlertController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { BowlsPage } from '../bowls/bowls';
import { StandingsPage } from '../standings/standings';
import { ChnagepasswordPage } from '../chnagepassword/chnagepassword';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;

  constructor(private fire: AngularFireAuth, public alerCtrl: AlertController, public navCtrl: NavController, public app: App) {
    this.email = fire.auth.currentUser.email;
   }

   bowls()
  {
    // let nav = this.app.getRootNav();
    // nav.setRoot(BowlsPage);
    // 
    // this.navCtrl.push('BowlsPage');
    let nav = this.app.getRootNav();
    nav.setRoot(StandingsPage);
  }

  logout(){
    let nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
    //this.fire.auth.signOut();
  
    //var nav = this.app.getRootNav();
    //this.fire.auth.signOut();
    //this.navCtrl.popAll(LoginPage);
    //this.navCtrl.setRoot(LoginPage);
    //this.fire.auth.signOut();
   // this.navCtrl.push(LoginPage);
    //const root = this.app.navPop();
  }

  changepass(){
    this.navCtrl.push('ResetPage');
  }
  
}
