import {Component, Input, OnInit} from '@angular/core';
import {ServicioMarcasService} from "../servicio-marcas.service";

@Component({
  selector: 'app-juego-detalle',
  templateUrl: './juego-detalle.component.html',
  styleUrls: ['./juego-detalle.component.css']
})
export class JuegoDetalleComponent implements OnInit {

  @Input() resultadosJueg: any;

  constructor(private data: ServicioMarcasService) { }

  ngOnInit() {

    this.data.mensajeActual2.subscribe(mensaje => this.resultadosJueg = mensaje)

  }

}
