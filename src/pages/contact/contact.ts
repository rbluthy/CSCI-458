import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {W1Page} from '../w1/w1';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  openW1Page(){
    this.navCtrl.push(W1Page);
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
