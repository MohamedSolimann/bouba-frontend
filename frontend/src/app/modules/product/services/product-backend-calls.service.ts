import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class ProductBackendCallsService {
  constructor(public myHttp: HttpClient) {}
  getAllProducts() {
    return this.myHttp.get(`http://${environment.host}:8080/products`, {
      headers: { "Content-Type": "Application/Json" },
    });
  }
  getProductByCategoryWithLimit(category: String, page, limit) {
    return this.myHttp.get(
      `http://${environment.host}:8080/products/category/${category}/${page}/${limit}`,
      {
        headers: { "Content-Type": "Application/Json" },
      }
    );
  }
  getProductByCategory(category: String) {
    return this.myHttp.get(
      `http://${environment.host}:8080/products/category/${category}`,
      {
        headers: { "Content-Type": "Application/Json" },
      }
    );
  }

  updateProduct(productId, data) {
    return this.myHttp.put(
      `http://${environment.host}:8080/products/${productId}`,
      data,
      {
        headers: { "Content-Type": "Application/Json" },
      }
    );
  }
  removeProduct(productId) {
    return this.myHttp.delete(
      `http://${environment.host}:8080/products/${productId}`
    );
  }
  addProduct(data) {
    return this.myHttp.post(`http://${environment.host}:8080/products`, data);
  }
}
