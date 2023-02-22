import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosFormComponent } from './productos-form/productos-form.component';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ProductosRoutingModule } from './productos-routing.module';

@NgModule({
  declarations: [
    ProductosFormComponent,
    ProductosListComponent
  ],
  imports: [
    ProductosRoutingModule,
    CommonModule
  ],
  providers: [],
})
export class ProductosModule { }
