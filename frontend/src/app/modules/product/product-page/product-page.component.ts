import { Component, OnInit } from '@angular/core';
import { Product } from '../models/response';
import { ProductBackendCallsService } from '../services/product-backend-calls.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  constructor(public backendCalls: ProductBackendCallsService) {
    this.handleGetAllProducts();
  }

  public products: Array<Product> = [];

  ngOnInit(): void {}

  handleGetAllProducts() {
    this.backendCalls.getAllProducts().subscribe((res: any) => {
      this.products = res.data;
    });
  }
}
