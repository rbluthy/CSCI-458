import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {W1Page} from '../w1/w1';
import {W2Page} from '../w2/w2';
import {W3Page} from '../w3/w3';
import {W4Page} from '../w4/w4';
import {W5Page} from '../w5/w5';
import {W6Page} from '../w6/w6';
import {W7Page} from '../w7/w7';
import {W8Page} from '../w8/w8';
import {W9Page} from '../w9/w9';
import {W10Page} from '../w10/w10';
import {W11Page} from '../w11/w11';
import {W12Page} from '../w12/w12';
import {W13Page} from '../w13/w13';
import {W14Page} from '../w14/w14';
import {W15Page} from '../w15/w15';
import {BowlsPage} from '../bowls/bowls';

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
  openW2Page(){
    this.navCtrl.push(W2Page);
  }
  openW3Page(){
    this.navCtrl.push(W3Page);
  }
  openW4Page(){
    this.navCtrl.push(W4Page);
  }
  openW5Page(){
    this.navCtrl.push(W5Page);
  }
  openW6Page(){
    this.navCtrl.push(W6Page);
  }
  openW7Page(){
    this.navCtrl.push(W7Page);
  }
  openW8Page(){
    this.navCtrl.push(W8Page);
  }
  openW9Page(){
    this.navCtrl.push(W9Page);
  }
  openW10Page(){
    this.navCtrl.push(W10Page);
  }
  openW11Page(){
    this.navCtrl.push(W11Page);
  }
  openW12Page(){
    this.navCtrl.push(W12Page);
  }
  openW13Page(){
    this.navCtrl.push(W13Page);
  }
  openW14Page(){
    this.navCtrl.push(W14Page);
  }
  openW15Page(){
    this.navCtrl.push(W15Page);
  }
  openBowlsPage(){
    this.navCtrl.push(BowlsPage);
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
