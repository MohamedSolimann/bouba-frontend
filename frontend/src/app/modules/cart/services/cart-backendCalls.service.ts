import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartBackendCallsService {
  constructor(public myHttp: HttpClient) {}

  sumbitOrder(data: object) {
    return this.myHttp.post('http://localhost:8080/order', data, {
      headers: { 'Content-Type': 'Application/JSON' },
    });
  }
}
