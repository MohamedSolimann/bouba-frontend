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
@NgModule({
  declarations: [
    FooterComponent,
    HomepageComponent,
    HeaderComponent,
    BodyComponent,
    CoreComponent,
    AdminComponent,
  ],
  imports: [CommonModule, FormsModule, CoreRouting],
  exports: [HeaderComponent],
})
export class CoreModule {}
