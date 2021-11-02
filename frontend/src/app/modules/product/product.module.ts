import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductRouting } from './product.routes';

@NgModule({
  declarations: [ProductComponent, ProductPageComponent],
  imports: [CommonModule, ProductRouting, CoreModule],
})
export class ProductModule {}
