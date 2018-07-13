import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ServicioMarcasService} from "../servicio-marcas.service";

@Component({
  selector: 'app-marca-general',
  templateUrl: './marca-general.component.html',
  styleUrls: ['./marca-general.component.css']
})
export class MarcaGeneralComponent implements OnInit{

  @Input() resultadosMar: any;

  constructor(private data: ServicioMarcasService) { }

  ngOnInit() {

    this.data.mensajeActual.subscribe(mensaje => this.resultadosMar = mensaje)

  }

  datosModelo(){

      this.data.cambiarMensaje2(this.resultadosMar[0].modelos)

  }

}
