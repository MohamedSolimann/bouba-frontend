import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartPageComponent } from "./cart-page/cart-page.component";
import { CoreModule } from "../core/core.module";
import { CartRoutes } from "./cart.routes";
import { OrderPageComponent } from "./order-page/order-page.component";
import { FormsModule } from "@angular/forms";
import { MapsComponent } from "./maps/maps.component";
import { CookieService } from "ngx-cookie-service";

@NgModule({
  declarations: [CartPageComponent, OrderPageComponent, MapsComponent],
  imports: [CommonModule, FormsModule, CartRoutes, CoreModule],
  providers: [CookieService],
})
export class CartModule {}
