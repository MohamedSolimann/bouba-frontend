import { Component, OnInit } from "@angular/core";
import { Product } from "../../product/models/response";
import { ProductBackendCallsService } from "../../product/services/product-backend-calls.service";
import { NavigationService } from "../../../service/navigation.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(public myNaviagtion: NavigationService) {}

  ngOnInit(): void {}

  getProductCategory(category: string) {
    this.myNaviagtion.navigateByURLWithData("/product", category);
    this.myNaviagtion.refreshPage(`product/${category}`);
  }
}
