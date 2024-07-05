import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { FilterPipe } from './../shared/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ProcesamientoDePedidosComponent } from './procesamiento-de-pedidos/procesamiento-de-pedidos.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    CartComponent,
    ProductComponent,
    FilterPipe,
    ProcesamientoDePedidosComponent,
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class SiteModule { }
