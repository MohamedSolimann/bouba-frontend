import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { NavigationService } from "../../../service/navigation.service";
import { UserBackendcallsService } from "../service/user-backendcalls.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(
    public myNaviagtion: NavigationService,
    public userBC: UserBackendcallsService,
    public cookieService: CookieService
  ) {
    this.userAuthentication();
  }
  public token: boolean = false;
  ngOnInit(): void {}

  getProductCategory(category: string) {
    this.myNaviagtion.navigateByURLWithData("/product", category);
    this.myNaviagtion.refreshPage(`product/${category}`);
  }
  signOut() {
    this.userBC.handleSignOut().subscribe((res: any) => {
      if (res.message === "Success") {
        debugger;
        this.myNaviagtion.refreshPage("/core");
      }
    });
  }
  userAuthentication() {
    this.token = this.cookieService.check("token");
  }
}
