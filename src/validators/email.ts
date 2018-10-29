import { FormControl } from '@angular/forms';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthProvider } from '../pages/register/provides/auth/auth';
export class EmailValidator {
    
    // public loading: Loading;
    public loginForm: FormGroup;
  

    constructor(
        public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController,
        public authProvider: AuthProvider,
        formBuilder: FormBuilder
      ) {
        
         {
          this.loginForm = formBuilder.group({
            email: [
              '',
              Validators.compose([Validators.required, EmailValidator.isValid])
            ],
            password: [
              '',
              Validators.compose([Validators.required, Validators.minLength(6)])
            ]
          });
        } 
      }
  static isValid(control: FormControl) {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    .test(
      control.value
    );

    if (re) {
      return null;
    }

    return {
      invalidEmail: true
    };
  }

  goToSignup():void {
    this.navCtrl.push('SignupPage');
  }
  
  goToResetPassword():void {
    this.navCtrl.push('ResetPasswordPage');
  }
 
}