import { Component, HostListener } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { NavigationService } from "src/app/service/navigation.service";
import { ProductBackendCallsService } from "../services/product-backend-calls.service";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"],
})
export class ProductPageComponent {
  constructor(
    public productBackendCalls: ProductBackendCallsService,
    public myActivedRouter: ActivatedRoute,
    public cookieService: CookieService,
    public myNavigation: NavigationService
  ) {
    this.category = myActivedRouter.snapshot.params.category;
    this.handleGetProductsByCategory(this.page, this.limit);
    this.userAuthentication();
  }

  public products: Array<any> = [];
  public category: string = "";
  public price: string = "";
  public desc: string = "";
  public stock: string = "";
  public status: string = "";
  public productId: any = "";
  public code: string = "";
  public productImage: string = "";
  public productCategory: string = "";
  public responseMessage: string = "";
  public product: any = {};
  public token: boolean = false;
  public page: number = 1;
  public limit: number = 5;
  public responseMessageAlert: string = "";
  @HostListener("window:scroll", ["$event"])
  onScroll(event: any) {
    let end = 949;
    if (
      document.documentElement.offsetHeight -
        document.documentElement.scrollTop ===
      end
    ) {
      if (!this.responseMessageAlert) {
        this.handleGetProductsByCategory(this.page, this.limit);
      }
    }
  }
  handleGetProductsByCategory(page, limit) {
    this.productBackendCalls
      .getProductByCategory(this.category, page, limit)
      .subscribe((res: any) => {
        if (res.message === "Success") {
          this.products = this.products.concat(res.data);
        } else if (res.message === "No More") {
          this.products = this.products.concat(res.data);
          this.responseMessageAlert = res.message;
        }
      });
    this.page++;
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
  getProductid(product: any) {
    this.productId = product._id;
    this.product = product;
  }
  handleUpdateProduct() {
    const {
      productId,
      price,
      stock,
      status,
      desc,
      productCategory,
      code,
      productImage,
    } = this;
    const data = {
      price,
      stock,
      status,
      desc,
      category: productCategory,
      code,
      image: productImage,
    };
    this.productBackendCalls
      .updateProduct(productId, data)
      .subscribe((res: any) => {
        if (res.message === "Updated Successfuly") {
          this.responseMessage = res.message;
          setTimeout(() => {
            this.myNavigation.refreshPage(`/product/${this.product.category}`);
          }, 1000);
        }
      });
  }
  handleRemoveProduct() {
    this.productBackendCalls
      .removeProduct(this.productId)
      .subscribe((res: any) => {
        if (res.message === "Deleted Successfuly") {
          this.responseMessage = res.message;
          this.myNavigation.refreshPage(`/product/${this.product.category}`);
        }
      });
  }
  handleAddProduct() {
    const { price, stock, status, desc, productCategory, code, productImage } =
      this;
    const data = {
      price,
      stock,
      status,
      desc,
      category: productCategory,
      code,
      image: productImage,
    };
    this.productBackendCalls.addProduct(data).subscribe((res: any) => {
      debugger;
      if (res.message === "Created Successfuly") {
        this.responseMessage = res.message;
        setTimeout(() => {
          this.myNavigation.refreshPage(`/product/${this.category}`);
        }, 1000);
      }
    });
  }
  userAuthentication() {
    this.token = this.cookieService.check("token");
  }
}
