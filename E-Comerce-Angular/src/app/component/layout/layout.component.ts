import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public totalItem: number = 0;
  cartItemp = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    let cartData = localStorage.getItem('local');
    if (cartData) {
      this.cartItemp = JSON.parse(cartData).length;
    }
  }
}
