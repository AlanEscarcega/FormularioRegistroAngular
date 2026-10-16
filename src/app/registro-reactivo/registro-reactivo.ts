import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-reactivo',
  imports: [ReactiveFormsModule],
  templateUrl: './registro-reactivo.html',
  styleUrl: './registro-reactivo.css'
})
export class RegistroReactivo {
  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellidos: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  registrado = false;
  datos = this.formulario.value;

  registrar() {
    this.datos = this.formulario.value;
    this.registrado = true;
    console.log('Datos registrados:', this.datos);
  }
}