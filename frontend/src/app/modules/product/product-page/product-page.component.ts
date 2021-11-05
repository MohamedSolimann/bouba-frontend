import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../core/service/navigation.service';
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
    public myNaviagtion: NavigationService
  ) {
    // this.handleGetAllProducts();
    debugger;
    this.category = myActivedRouter.snapshot.params.category;
    this.handleGetProductsByCategory();
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
    debugger;
    this.productBackendCalls
      .getProductByCategory(this.category)
      .subscribe((res: any) => {
        if (res.message === 'Success') {
          debugger;
          this.products = res.data;
        }
      });
  }
}
