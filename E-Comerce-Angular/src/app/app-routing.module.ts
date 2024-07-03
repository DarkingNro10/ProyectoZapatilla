import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './site/product/product.component';
import { LayoutComponent } from './component/layout/layout.component'; // Asegúrate de que esta ruta sea correcta
import { ProcesamientoDePedidosComponent } from './site/procesamiento-de-pedidos/procesamiento-de-pedidos.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./site/site.module').then(m => m.SiteModule)
      },
    ]
  },
  {
    path: 'Cart',
    component: LayoutComponent,
    data: {
      title: 'Cart'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./site/site.module').then(m => m.SiteModule)
      },
    ]
  },
  {
    path: 'product/:productId',
    component: ProductComponent,
    data: {
      title: 'Product Details'
    }
  },
  {
    path: 'procesamiento-de-pedidos',
    component: ProcesamientoDePedidosComponent,
    data: {
      title: 'Procesamiento de Pedidos'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
