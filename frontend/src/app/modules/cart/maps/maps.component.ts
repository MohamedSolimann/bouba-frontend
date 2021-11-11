import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapBackendCallsService } from '../services/map-backendCalls.service';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  constructor(public myMap: MapBackendCallsService) {}

  ngOnInit(): void {
    let lng, lat;
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(
      'pk.eyJ1IjoibW9oYW1lZHNvbGltYW4iLCJhIjoiY2t2cXZlMDRwMDF1djJ1bHltYjJxM2wxNyJ9.SMu7QTiCxWAHsQ6IO2MgBg'
    );
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [30.0986754, 31.3427151],
      zoom: 9,
    });

    const geolocate = new mapboxgl.GeolocateControl({
      showAccuracyCircle: true,
      showUserLocation: false,
      fitBoundsOptions: { zoom: 15 },
    });
    map.addControl(geolocate);
    geolocate.on('geolocate', (e: any) => {
      lng = e.coords.longitude;
      lat = e.coords.latitude;
      marker.setLngLat([lng, lat]).addTo(map);
      this.myMap.getUserAddress(lng, lat).subscribe((res: any) => {
        this.region = res.features[0].context[2].text;
        this.address = res.features[0].properties.address;
      });
      setTimeout(() => {
        this.emitAddress();
      }, 2000);
    });
    const marker = new mapboxgl.Marker({
      draggable: true,
    });
    marker.on('dragend', () => {
      const lnglat = marker.getLngLat();
      this.myMap
        .getUserAddress(lnglat.lng, lnglat.lat)
        .subscribe((res: any) => {
          this.region = res.features[0].context[2].text;
          this.address = res.features[0].properties.address;
        });
      this.emitAddress();
    });
  }
  @Output() AddressEmit = new EventEmitter<Object>();
  public region: String = '';
  public address: String = '';

  emitAddress() {
    this.AddressEmit.emit({ region: this.region, address: this.address });
  }
}
