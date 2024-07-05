import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  dni: string = '';
  telefono: string = '';

  constructor(private clienteService: ClienteService, private router: Router) { }

  onSubmit() {
    this.clienteService.login(this.dni, this.telefono).subscribe({
      next: (response) => {
        if (response) {
          this.clienteService.setLoggedIn(true);
          this.router.navigate(['/']);
        } else {
          alert('Invalid DNI or phone number');
        }
      },
      error: (error) => {
        console.error('Error during login:', error);
        alert('An error occurred during login');
      }
    });
  }
}
