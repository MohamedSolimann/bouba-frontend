import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { NavigationService } from "src/app/service/navigation.service";
import { CartBackendCallsService } from "../services/cart-backendCalls.service";

@Component({
  selector: "app-order-page",
  templateUrl: "./order-page.component.html",
  styleUrls: ["./order-page.component.css"],
})
export class OrderPageComponent implements OnInit {
  constructor(
    public cartBackendCalls: CartBackendCallsService,
    public cookieService: CookieService,
    public myNavigation : NavigationService
  ) {
    this.getCookies("cart");
  }

  public cartProducts: Array<any> = [];
  public mobile: string = "";
  public username: string = "";
  public street: string = "";
  public floor: string = "";
  public appartment: string = "";
  public region: string = "";
  public total: number = 0;
  public responseMessage: string = "";

  ngOnInit(): void {}

  getCartProductsTotal() {
    this.cartProducts.forEach((obj) => {
      this.total += parseInt(obj.price);
    });
  }
  handleSumbitOrder() {
    this.getCartProductsTotal();
    let {
      username,
      region,
      street,
      floor,
      appartment,
      mobile,
      cartProducts,
      total,
    } = this;
    let address = { region, street, floor, appartment };
    let data = { username, address, mobile, products: cartProducts, total };
    this.cartBackendCalls.sumbitOrder(data).subscribe((res: any) => {
      if (res.message === "Success") {
        this.responseMessage = "Order Successfully";
        this.cookieService.delete("cart");
        setTimeout(() => {
          this.myNavigation.navigateByURL('/')
          
        }, 2000);
      }
    });
  }
  getAddress(address) {
    this.region = address.region;
    this.street = address.address;
  }
  getCookies(cookieName: string) {
    if (this.cookieService.check(cookieName)) {
      this.cartProducts = JSON.parse(this.cookieService.get(cookieName));
    }
  }
}
