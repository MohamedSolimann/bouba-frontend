import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer/footer.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from "./homepage/body/body.component";
import { CoreComponent } from "./core.component";
import { CoreRouting } from "./core.routes";
import { AdminComponent } from "./admin/admin.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CarouselModule } from "ngx-owl-carousel-o";
import { CarouselComponent } from './carousel/carousel.component';
@NgModule({
  declarations: [
    FooterComponent,
    HomepageComponent,
    HeaderComponent,
    BodyComponent,
    CoreComponent,
    AdminComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreRouting,
    RouterModule,
    CarouselModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
