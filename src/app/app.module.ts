import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StandingsPage } from '../pages/standings/standings';
import { TeamsPage } from '../pages/teams/teams';
import { LoginPage} from '../pages/login/login';
import { RegisterPage} from '../pages/register/register';

import {W1Page} from '../pages/w1/w1';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from "angularfire2";
import { FIREBASE_CONFIG } from './app.firebase.config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AngularFireAuth} from "angularfire2/auth";
import { RegisterPageModule } from '../pages/register/register.module';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    StandingsPage,
    TeamsPage,
    TabsPage,
    LoginPage,
    W1Page

  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,  
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    RegisterPageModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    StandingsPage,
    TeamsPage,
    TabsPage,
    LoginPage,
    W1Page

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth
  ]
})
export class AppModule {}
