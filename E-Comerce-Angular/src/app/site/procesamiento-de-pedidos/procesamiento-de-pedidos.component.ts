import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-procesamiento-de-pedidos',
  templateUrl: './procesamiento-de-pedidos.component.html',
  styleUrls: ['./procesamiento-de-pedidos.component.css']
})
export class ProcesamientoDePedidosComponent implements OnInit {
  userId: number = 1; // Define el userId predeterminado
  pedido: Pedido | null = null;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void { }

  procesarPedido(): void {
    this.pedidoService.procesarPedido(this.userId).subscribe(pedido => {
      this.pedido = pedido;
      console.log('Pedido procesado:', pedido);
    });
  }

  descargarPdf(): void {
    if (this.pedido) {
      this.pedidoService.generatePdf(this.pedido.id).subscribe(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `pedido_${this.pedido?.id}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
      });
    }
  }
}
