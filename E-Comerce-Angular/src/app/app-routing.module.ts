import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './site/product/product.component';
import { LayoutComponent } from './component/layout/layout.component';
import { ProcesamientoDePedidosComponent } from './site/procesamiento-de-pedidos/procesamiento-de-pedidos.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { title: 'Home' },
    children: [
      {
        path: '',
        loadChildren: () => import('./site/site.module').then(m => m.SiteModule)
      }
    ]
  },
  {
    path: 'cart',
    component: LayoutComponent,
    data: { title: 'Cart' },
    children: [
      {
        path: '',
        loadChildren: () => import('./site/site.module').then(m => m.SiteModule)
      }
    ]
  },
  {
    path: 'product/:productId',
    component: LayoutComponent,
    data: { title: 'Product Details' },
    children: [
      {
        path: '',
        component: ProductComponent
      }
    ]
  },
  {
    path: 'procesamiento-de-pedidos',
    component: LayoutComponent,
    data: { title: 'Procesamiento de Pedidos' },
    children: [
      {
        path: '',
        component: ProcesamientoDePedidosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
