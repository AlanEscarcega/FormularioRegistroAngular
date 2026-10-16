import { Component } from '@angular/core';
import { Registro } from './registro/registro';
import { RegistroReactivo } from './registro-reactivo/registro-reactivo';

@Component({
  selector: 'app-root',
  imports: [Registro, RegistroReactivo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}