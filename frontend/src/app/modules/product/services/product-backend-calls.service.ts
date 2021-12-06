import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class ProductBackendCallsService {
  constructor(public myHttp: HttpClient) {}
  getAllProducts() {
    return this.myHttp.get(`${environment.protocol}://${environment.host}/products`, {
      headers: { "Content-Type": "Application/Json" },
    });
  }
  getProductByCategoryWithLimit(category: String, page, limit) {
    return this.myHttp.get(
      `${environment.protocol}://${environment.host}/products/category/${category}/${page}/${limit}`,
      {
        headers: { "Content-Type": "Application/Json" },
      }
    );
  }
  getProductByCategory(category: String) {
    return this.myHttp.get(
      `${environment.protocol}://${environment.host}/products/category/${category}`,
      {
        headers: { "Content-Type": "Application/Json" },
      }
    );
  }
  addMultipleProducts(arrayOfProducts: any) {
    return this.myHttp.post(
      `${environment.protocol}://${environment.host}/products/category/`,arrayOfProducts,
      {
        headers: { "Content-Type": "Application/Json" },
      }
    );
  }
  updateProduct(productId, data) {
    return this.myHttp.put(
      `${environment.protocol}://${environment.host}/products/${productId}`,
      data,
      {
        headers: { "Content-Type": "Application/Json" },
      }
    );
  }
  removeProduct(productId) {
    return this.myHttp.delete(
      `${environment.protocol}://${environment.host}/products/${productId}`
    );
  }
  addProduct(data) {
    return this.myHttp.post(`${environment.protocol}://${environment.host}/products`, data);
  }
}
