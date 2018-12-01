import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { StandingsPage } from '../standings/standings';
import { TeamsPage } from '../teams/teams';
import { MapsPage } from '../maps/maps';

import {Events, NavController } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = StandingsPage;
  tab5Root = TeamsPage;
  tab6Root = MapsPage;


  constructor(public events: Events, public navCtrl: NavController) {

  }
}
