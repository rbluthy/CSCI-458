import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google:any;

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  @ViewChild('map') mapRef: ElementRef;
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap(){
    const location = new google.maps.LatLng(34.362157,-89.534201);

    const options = {
      center: location,
      zoom: 15,
      streetViewControl: false,
      mapTypeId: 'hybrid'
    };

    const map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.addMarker(location, map)
  }

  addMarker(positon, map){
    return new google.maps.Marker({
      positon,
      map
    });
  }

}
