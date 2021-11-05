import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CoreModule } from '../core/core.module';
import { CartRoutes } from './cart.routes';

@NgModule({
  declarations: [CartPageComponent],
  imports: [CommonModule, CartRoutes, CoreModule],
})
export class CartModule {}
