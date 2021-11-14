import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataTransferService } from 'src/app/modules/services/data-transfer.service';
import { CookiesService } from '../../services/cookie-service';
import { Product } from '../models/response';
import { ProductBackendCallsService } from '../services/product-backend-calls.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  constructor(
    public productBackendCalls: ProductBackendCallsService,
    public myActivedRouter: ActivatedRoute,
    public cookieService : CookieService

  ) {
    this.category = myActivedRouter.snapshot.params.category;
    this.handleGetProductsByCategory();
    this.addToCart({b:"c",price:10})
    }

  public products: Array<Product> = [];
  public category: string = '';
  ngOnInit(): void {}

  handleGetAllProducts() {
    this.productBackendCalls.getAllProducts().subscribe((res: any) => {
      this.products = res.data;
    });
  }
  handleGetProductsByCategory() {
    this.productBackendCalls
      .getProductByCategory(this.category)
      .subscribe((res: any) => {
        if (res.message === 'Success') {
          this.products = res.data;
        }
      });
  }
  addToCart(product: object) {
    let cookieValue = this.cookieService.get('cart')
    if(cookieValue){
      let parsedCookieValue = JSON.parse(cookieValue)
       parsedCookieValue.push(product)
       this.cookieService.set('cart',JSON.stringify(parsedCookieValue))
    }else{
      this.cookieService.set('cart',JSON.stringify([product]))
    }
  }
}
