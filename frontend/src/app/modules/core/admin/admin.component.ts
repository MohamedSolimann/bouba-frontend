import { Component, OnInit } from "@angular/core";
import { NavigationService } from "src/app/service/navigation.service";
import { UserBackendcallsService } from "../service/user-backendcalls.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
  constructor(
    public userBC: UserBackendcallsService,
    public myNavigation: NavigationService
  ) {}

  ngOnInit(): void {}
  public username: string = "";
  public password: string = "";

  signIn() {
    let data = { username: this.username, password: this.password };
    this.userBC.handleSignIn(data).subscribe((res: any) => {
      if (res.message === "Success") {
        this.myNavigation.navigateByURL("/");
      }
    });
  }
}
