package com.example.mscarrito.controller;

import com.example.mscarrito.entity.CarritoItem;
import com.example.mscarrito.service.CarritoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/carrito")
public class CarritoController {

    @Autowired
    private CarritoService carritoService;

    @PostMapping("/add")
    public ResponseEntity<CarritoItem> addToCart(@RequestBody CarritoItem carritoItem) {
        CarritoItem savedItem = carritoService.agregarItemAlCarrito(carritoItem);
        return ResponseEntity.ok(savedItem);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<CarritoItem>> getCartItems(@PathVariable Integer userId) {
        List<CarritoItem> cartItems = carritoService.obtenerItemsPorUsuario(userId);
        return ResponseEntity.ok(cartItems);
    }

    @GetMapping("/total/{userId}")
    public ResponseEntity<BigDecimal> getTotalPrice(@PathVariable Integer userId) {
        BigDecimal totalPrice = carritoService.calcularPrecioTotalPorUsuario(userId);
        return ResponseEntity.ok(totalPrice);
    }

    @DeleteMapping("/remove/{id}")
    public ResponseEntity<String> removeFromCart(@PathVariable Integer id) {
        carritoService.vaciarCarrito(id);
        return ResponseEntity.ok("Producto eliminado del carrito");
    }
}
