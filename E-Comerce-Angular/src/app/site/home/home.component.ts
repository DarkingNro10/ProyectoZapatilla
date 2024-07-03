import { Component, OnInit } from '@angular/core';
import { ProductoService } from './../../services/producto.service';
import { CartService } from "../../services/cart.service";
import { Producto } from 'src/app/models/produc'; // Ajusta la ruta según la ubicación de tu modelo


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productData: Producto[] = [];
  searchKey: string = "";

  constructor(private productService: ProductoService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProductos().subscribe(res => {
      this.productData = res;
    });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

}
