//https://medium.com/@balramchavan/integrating-google-maps-in-angular-5-ca5f68009f29
/// <reference types="@types/googlemaps" />
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'maps-angular-cv64';
  latitude: number = 37.2776;
  longitude: number = -76.5039;
  zoom: number = 15;

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    console.log("maps-angular-cv64.ngOnInit");

    let myLatLng = { lat: this.latitude, lng: this.longitude };

    let mapProperties = {
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: this.zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    let marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: this.title
    });

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProperties);
    marker.setMap(this.map);
  }

  setMapType(mapTypeId: string) {
    console.log("maps-angular-cv64.setMapType:" + mapTypeId);
    this.map.setMapTypeId(mapTypeId)
  }

  setCenter(e: any) {
    console.log("maps-angular-cv64.setCenter");
    e.preventDefault();
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  }
}
