import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(public myRouter: Router) {}

  navigateByURL(url: string) {
    this.myRouter.navigateByUrl(url);
  }
  navigateByURLWithData(url: string, data: any) {
    this.myRouter.navigate([url, data]);
  }
  refreshPage(url: string) {
    this.myRouter.navigateByUrl('').then(() => {
      this.myRouter.navigateByUrl(url);
    });
  }
}
