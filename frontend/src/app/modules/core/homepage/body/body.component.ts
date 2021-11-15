import { Component, OnInit } from "@angular/core";
import { NavigationService } from "src/app/service/navigation.service";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"],
})
export class BodyComponent implements OnInit {
  constructor(public myNavigation: NavigationService) {}

  ngOnInit(): void {}
  navigateTo(url: string, categoryName: String) {
    this.myNavigation.navigateByURLWithData(url, categoryName);
  }
}
