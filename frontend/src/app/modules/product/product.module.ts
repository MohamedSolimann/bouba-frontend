import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product.component";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { ProductPageComponent } from "./product-page/product-page.component";
import { ProductRouting } from "./product.routes";
import { CookieService } from "ngx-cookie-service";
import { FormsModule } from "@angular/forms";
import { FliterMenuComponent } from './fliter-menu/fliter-menu.component';

@NgModule({
  declarations: [ProductComponent, ProductPageComponent, FliterMenuComponent],
  imports: [CommonModule, FormsModule, ProductRouting, CoreModule],
  providers: [CookieService],
})
export class ProductModule {}
