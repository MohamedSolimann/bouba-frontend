import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductBackendCallsService {
  constructor(public myHttp: HttpClient) {}
  getAllProducts() {
    return this.myHttp.get("http://localhost:8080/products", {
      headers: { "Content-Type": "Application/Json" },
    });
  }
  getProductByCategory(category: String) {
    let page = 0;
    let limit = 5;
    return this.myHttp.get(
      `http://localhost:8080/products/category/${category}/${page}/${limit}`,
      {
        headers: { "Content-Type": "Application/Json" },
      }
    );
  }
}
