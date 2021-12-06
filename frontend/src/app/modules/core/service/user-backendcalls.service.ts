import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserBackendcallsService {
  constructor(public myHttp: HttpClient) {}
  handleSignIn(data) {
    return this.myHttp.post(
      `${environment.protocol}://${environment.host}:${environment.port}/user/signin`,
      data,
      {
        headers: { "Contet-Type": "Application/JSON" },
        withCredentials: true,
      }
    );
  }
  handleSignOut() {
    return this.myHttp.get(`${environment.protocol}://${environment.host}:${environment.port}/user/signout`, {
      withCredentials: true,
    });
  }
}
