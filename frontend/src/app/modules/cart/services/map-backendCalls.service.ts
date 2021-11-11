import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MapBackendCallsService {
  constructor(public myHttp: HttpClient) {}

  getUserAddress(lng, lat) {
    return this.myHttp.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?types=poi&access_token=pk.eyJ1IjoibW9oYW1lZHNvbGltYW4iLCJhIjoiY2t2cXZlMDRwMDF1djJ1bHltYjJxM2wxNyJ9.SMu7QTiCxWAHsQ6IO2MgBg`
    );
  }
}
