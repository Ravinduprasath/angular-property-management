import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { propertyModel } from 'src/models/propertyModel';

import { Loader } from '@googlemaps/js-api-loader';
import { google } from "google-maps";
import * as GoogleMapsLoader from 'google-maps';

@Component({
  selector: 'app-detail-property',
  templateUrl: './detail-property.component.html',
  styleUrls: ['./detail-property.component.scss']
})
export class DetailPropertyComponent implements OnInit {

  // Store property id get from url parameter
  propertyId : number = 0;

  // Store property detail
  property = new propertyModel();

  /// Google map variable
  /// https://www.npmjs.com/package/@googlemaps/js-api-loader
  /// npm install @types/google-maps --save
  /// import { google } from "google-maps";
  private map !: google.maps.Map;

  constructor(private activatedRoute : ActivatedRoute,
              private api : ApiService) { }

  /// <Summery>
  /// Get one of property from database
  /// <Summery>
  /// <return></return>
  getProperty(id : number){
    this.api.getProperty(id)
    .subscribe({
      next : (res) => {
        this.property = res;
        this.setMap(this.property.latitude, this.property.longitude)
      },
      error:() =>{

      }
    })
  }

  /// <Summery>
  /// Get one of property from database
  /// <Summery>
  /// <return></return>
  setMap(latitude : number, longitude : number){
    const loader = new Loader({
      apiKey: "AIzaSyAp9_20uacecqIv_pw1m20LCc8FBPQAH3w",
    });

    const mapDiv = document.getElementById('map')!;

    const mapOptions = {
      center: {
        lat: latitude,
        lng: longitude,
      },
      zoom: 4
    };

    const location = {
      lat: latitude,
      lng: longitude,
    }


    loader.load().then((google) => {

      this.map = new google.maps.Map(mapDiv, mapOptions);

      const marker = new google.maps.Marker({
         position : location,
         map:this.map
      })
    })   
  }


  ngOnInit(): void {

    // Get propertyId from url parameter
    this.propertyId = Number(this.activatedRoute.snapshot.paramMap.get('propertyId'));

    if(this.propertyId > 0){
      this.getProperty(this.propertyId);   
    } 
  }

}
