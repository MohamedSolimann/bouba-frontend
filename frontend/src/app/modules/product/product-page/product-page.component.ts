import { Component, HostListener } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { NavigationService } from "src/app/service/navigation.service";
import { AWSService } from "../services/aws.service";
import { ProductBackendCallsService } from "../services/product-backend-calls.service";
import { environment } from "src/environments/environment.prod";

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
    public myNavigation: NavigationService,
    public myAWSService: AWSService
  ) {
    this.category = myActivedRouter.snapshot.params.category;
    this.handleGetProductsByCategory();
    this.userAuthentication();
    this.myAWSService.initializeS3Interface();
  }

  public products: Array<any> = [];
  public category: string = "";
  public price: string = "";
  public desc: string = "";
  public stock: string = "";
  public status: string = "";
  public productId: any = "";
  public productCode: number = 3;
  public productImage: string = "";
  public uploadedFile: string = "";
  public productCategory: string = "";
  public responseMessage: string = "";
  public product: any = {};
  public token: boolean = false;
  public page: number = 1;
  public limit: number = 5;
  public responseMessageAlert: string = "";
  public ArrayOfProducts: Array<any> = [];
  public fileLocation = "";
  public productsAdded: number = 0;
  // @HostListener("window:scroll", ["$event"])
  // onScroll(event: any) {
  //   let end = 949
  //   let end1 =721.800048828125
  //   console.log(document.documentElement.scrollTop)
  //   if (
  //   (  document.documentElement.offsetHeight -
  //       document.documentElement.scrollTop ===
  //     end) ||    (  document.documentElement.offsetHeight -
  //     document.documentElement.scrollTop ===
  //   end1)
  //   ) {
  //     if (!this.responseMessageAlert) {
  //       this.handleGetProductsByCategory(this.page, this.limit);
  //     }
  //   }
  // }
  handleGetProductsByCategory() {
    this.productBackendCalls
      .getProductByCategory(this.category)
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
    this.product= product
    this.productId = product._id;
    this.productCode = product.code;
  }
  handleUpdateProduct() {
    const {
      productId,
      price,
      stock,
      status,
      desc,
      productCategory,
      productCode,
      productImage,
    } = this;
    const data = {
      price,
      stock,
      status,
      desc,
      category: productCategory,
      code :productCode,
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
          this.productCode++;
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
  async fileLocationOnS3() {
    this.fileLocation = await Promise.resolve(
      this.myAWSService.uploadFile(
        this.uploadedFile,
        this.productCategory.toLowerCase()
      )
    );
  }
  async handleAddProduct() {
    await this.fileLocationOnS3();
    const { price, stock, status, desc, productCategory, productCode, fileLocation } =
      this;
    const data = {
      price,
      stock,
      status,
      desc,
      category: productCategory,
      code :productCode,
      image: fileLocation,
    };
    this.productBackendCalls.addProduct(data).subscribe((res: any) => {
      if (res.message === "Created Successfuly") {
        this.responseMessage = res.message;
        setTimeout(() => {
          this.myNavigation.refreshPage(`/product/${this.category}`);
        }, 1000);
      }
    });
  }
  async addMultipleProducts() {
    await this.fileLocationOnS3();
    const { price, stock, status, desc, productCategory, productCode, fileLocation } =
      this;
    const data = {
      price,
      stock,
      status,
      desc,
      category: productCategory,
      code :productCode,
      image: fileLocation,
    };
    this.ArrayOfProducts.push(data);
    this.productsAdded++;
    console.log(this.ArrayOfProducts);
  }
  handleAddallProducts() {
    this.productBackendCalls
      .addMultipleProducts(this.ArrayOfProducts)
      .subscribe((res: any) => {
        if (res.message === "Success") {
          this.myNavigation.refreshPage("/products/Accessories");
        }
      });
  }
  userAuthentication() {
    this.token = this.cookieService.check("token");
  }
  fileUploaded(event) {
    this.uploadedFile = event.target.files[0];
  }
}
