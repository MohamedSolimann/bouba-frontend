import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserBackendcallsService {
  constructor(public myHttp: HttpClient) {}

  handleSignIn(data) {
    return this.myHttp.post("http://localhost:8080/user/signin", data, {
      headers: { "Contet-Type": "Application/JSOn" },
      withCredentials: true,
    });
  }
  handleSignOut() {
    return this.myHttp.get("http://localhost:8080/user/signout", {
      withCredentials: true,
    });
  }
}
