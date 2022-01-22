import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-fliter-menu",
  templateUrl: "./fliter-menu.component.html",
  styleUrls: ["./fliter-menu.component.css"],
})
export class FliterMenuComponent implements OnInit {
  constructor() {}
  @Output() fromFilterMenuToProduct = new EventEmitter();
  ngOnInit(): void {}
  getCheckBoxInput(checkboxinput) {
    if (checkboxinput === "offers") {
      debugger;
      this.fromFilterMenuToProduct.emit("offers");
    }
    if (checkboxinput === "available") {
      debugger;
      this.fromFilterMenuToProduct.emit("available");
    }
  }
}
