import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './homepage/body/body.component';
import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { CoreRouting } from './core.routes';
@NgModule({
  declarations: [
    FooterComponent,
    HomepageComponent,
    HeaderComponent,
    BodyComponent,
    CoreComponent,
  ],
  imports: [CommonModule, CoreRouting],
  exports: [HeaderComponent],
})
export class CoreModule {}
