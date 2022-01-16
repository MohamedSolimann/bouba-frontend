import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import modulesRouter from "./app.routing";
import { CartComponent } from "./modules/cart/cart.component";
@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(modulesRouter),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
