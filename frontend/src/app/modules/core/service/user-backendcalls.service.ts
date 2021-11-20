import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserBackendcallsService {
  constructor(public myHttp: HttpClient) {}
public x = "18.157.177.129"
  handleSignIn(data) {
    return this.myHttp.post(`http://${environment.host}:8080/user/signin`, data, {
      headers: { "Contet-Type": "Application/JSOn" },
      withCredentials: true,
    });
  }
  handleSignOut() {
    return this.myHttp.get(`http://${environment.host}:8080/user/signout`, {
      withCredentials: true,
    });
  } 
}
