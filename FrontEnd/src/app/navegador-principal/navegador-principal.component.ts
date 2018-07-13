import { Component, OnInit } from '@angular/core';
import {ServicioMarcasService} from "../servicio-marcas.service";

@Component({
  selector: 'app-navegador-principal',
  templateUrl: './navegador-principal.component.html',
  styleUrls: ['./navegador-principal.component.css']
})
export class NavegadorPrincipalComponent implements OnInit {

  items

  constructor(private data: ServicioMarcasService) {

    this.data.mensajeActual3.subscribe(mensaje => this.items = mensaje)
  }

  ngOnInit() {
  }

}
