import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataTransferService {
  constructor() {}

  public cart: Array<any> = [];
}
