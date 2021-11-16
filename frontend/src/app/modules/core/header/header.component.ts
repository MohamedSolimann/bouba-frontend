import { Component, OnInit } from "@angular/core";
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
    public userBC: UserBackendcallsService
  ) {}

  ngOnInit(): void {}

  getProductCategory(category: string) {
    this.myNaviagtion.navigateByURLWithData("/product", category);
    this.myNaviagtion.refreshPage(`product/${category}`);
  }
  signOut() {
    this.userBC.handleSignOut().subscribe((res: any) => {
      if (res.message === "Success") {
        this.myNaviagtion.refreshPage("");
      }
    });
  }
}
