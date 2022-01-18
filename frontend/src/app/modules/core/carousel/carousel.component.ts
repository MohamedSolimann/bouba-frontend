import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { NavigationService } from "src/app/service/navigation.service";
import { ProductBackendCallsService } from "../../product/services/product-backend-calls.service";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements OnInit {
  constructor(
    public navigation: NavigationService,
    public productBackendCalls: ProductBackendCallsService
  ) {
    this.getProductByStatus("On Sale");
  }

  public carouselImages: any = [];

  ngOnInit(): void {}
  customOptions: OwlOptions = {
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    navText: ["&#8249", "&#8250;"],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 3,
      },
    },
    nav: true,
  };
  getProductByStatus(status) {
    this.productBackendCalls
      .getProductByStatus(status)
      .subscribe((response: any) => {
        if (response.message === "Success") {
          this.carouselImages = response.data;
        }
      });
  }
  getImageCategory(imageCategory) {
    this.navigation.navigateByURL(`product/${imageCategory}`);
  }
}
