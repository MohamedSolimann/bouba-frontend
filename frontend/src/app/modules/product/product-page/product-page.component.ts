import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { NavigationService } from "src/app/service/navigation.service";
import { Product } from "../models/response";
import { ProductBackendCallsService } from "../services/product-backend-calls.service";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"],
})
export class ProductPageComponent implements OnInit {
  constructor(
    public productBackendCalls: ProductBackendCallsService,
    public myActivedRouter: ActivatedRoute,
    public cookieService: CookieService,
    public myNavigation: NavigationService
  ) {
    this.category = myActivedRouter.snapshot.params.category;
    this.handleGetProductsByCategory();
  }

  public products: Array<Product> = [];
  public category: string = "";
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
        if (res.message === "Success") {
          this.products = res.data;
        }
      });
  }
  addToCart(product: object) {
    if (!this.checkProductInCart(product)) {
      let cookieValue = this.cookieService.get("cart");
      if (cookieValue) {
        let parsedCookieValue = JSON.parse(cookieValue);
        parsedCookieValue.push(product);
        this.cookieService.set("cart", JSON.stringify(parsedCookieValue));
      } else {
        this.cookieService.set("cart", JSON.stringify([product]));
      }
      this.myNavigation.navigateByURL("cart");
    } else {
      this.myNavigation.navigateByURL("cart");
    }
  }
  checkProductInCart(productInfo) {
    let cookieValue = this.cookieService.get("cart");
    if (cookieValue) {
      let productsInCart = JSON.parse(cookieValue);
      for (let i = 0; i < productsInCart.length; i++) {
        const product = productsInCart[i];
        if (product._id === productInfo._id) {
          return true;
        }
      }
    }
    return false;
  }
}
