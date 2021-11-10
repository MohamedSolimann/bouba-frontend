import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTransferService } from 'src/app/data-transfer.service';
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
    public dataTransfer: DataTransferService
  ) {
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
    this.productBackendCalls
      .getProductByCategory(this.category)
      .subscribe((res: any) => {
        if (res.message === 'Success') {
          this.products = res.data;
        }
      });
  }
  addToCart(product: object) {
    this.dataTransfer.cart.push(product);
  }
}
