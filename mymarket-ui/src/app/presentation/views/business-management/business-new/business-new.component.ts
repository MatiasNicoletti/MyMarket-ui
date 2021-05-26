import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BusinessService } from 'src/app/services/business/business.service';

@Component({
  selector: 'app-business-new',
  templateUrl: './business-new.component.html'
})
export class BusinessNewComponent implements OnInit {
  storesFormGroup: FormGroup;
  isLinear = false;
  userFormGroup: FormGroup;
  latitude: number;
  longitude: number;
  zoom: number = 8;
  address: any;
  stores:[] = [];
  isValidAddress: boolean = false;
  private geoCoder;
  constructor(
    private _formBuilder: FormBuilder,
    private businessService: BusinessService,
    private mapsAPILoader: MapsAPILoader,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.setCurrentLocation();
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;
    });

    this.businessService.getStoreListSubscription().subscribe((response:[]) => {
      
      this.stores = response;
    });
  }

  onSubmit(){
    this.businessService.uploadBusiness(this.stores);
  }

  placeMarker(latitude, longitude, zoom = 12) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.zoom = zoom;
  }

  addMarker(lat: number, lng: number) {
    this.latitude = lat;
    this.longitude = lng;
    this.isValidAddress = false;
    this.getAddress();
    
  }


  OnAddStore() {
    
    if (this.isValidAddress) {
      this.businessService.addStore({
        address: (this.address[0].long_name + ', ' + this.address[1].long_name),
        city: this.address[2].long_name,
        latitude: this.latitude.toString(),
        longitude: this.longitude.toString(),
        name: this.storesFormGroup.value.name,
        userID: 40
      });
    }

  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        // this.zoom = 8;

        // this.getAddress(this.latitude, this.longitude);
        // this.placeMarker(this.latitude, this.longitude);
      });
    }
  }

  getAddress(latitude?, longitude?) {
    this.geoCoder.geocode({ 'location': { lat: latitude || this.latitude, lng: longitude || this.longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 8;
          this.address = results[0].address_components.slice(0, 6);
          this.isValidAddress = true;
         
        } else {

          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }

  private initForm() {
    this.storesFormGroup = this._formBuilder.group({
      name: [''],
    });
  }

}
