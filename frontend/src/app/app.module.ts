import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import modulesRouter from './app.routing';
import { CartComponent } from './modules/cart/cart.component';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(modulesRouter),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
