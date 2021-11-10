import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/data-transfer.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  constructor(public dataTransfer: DataTransferService) {}

  public cartProducts: Array<any> = this.dataTransfer.cart;
  public show: boolean = true;

  ngOnInit(): void {}

  removeItemFromCart(productName: String) {
    debugger;
    for (let i = 0; i < this.cartProducts.length; i++) {
      if (this.cartProducts[i].name === productName) {
        this.cartProducts.splice(i, 1);
        return;
      }
    }
  }
  checkCartIsEmpty() {
    if (this.cartProducts.length !== 0) {
      this.show = false;
    }
  }
}
