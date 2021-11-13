import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataTransferService } from 'src/app/modules/services/data-transfer.service';
import { NavigationService } from '../../core/service/navigation.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  constructor(public cookieService : CookieService,public myNaviagtion:NavigationService) {
    this.getCartTotal();
    this.getCookies('cart')
    
  }

  public cartProducts: Array<any> = []
  public total: number = 0;
  public cartCookies:Array<object> = []

  ngOnInit(): void {}

  removeItemFromCart(productName: String) {
    for (let i = 0; i < this.cartProducts.length; i++) {
      if (this.cartProducts[i].name === productName) {
        this.cartProducts.splice(i, 1);
        this.setCookies('cart',JSON.stringify(this.cartProducts))
        if(this.cartProducts.length ){
          this.total -= this.cartProducts[i].price;
        }
        this.myNaviagtion.refreshPage('cart')
        return;
      }
    }
  }
  getCartTotal() {
    this.cartProducts.forEach((obj) => {
      this.total += parseInt(obj.price);
    });
  }
  getCookies(cookieName:string){
    this.cartProducts = JSON.parse(this.cookieService.get(cookieName))
  }
  setCookies(cookieName:string,cookieValue:any){
    this.cookieService.set(cookieName,cookieValue)
  }
}
