import {Component, Input, OnInit} from '@angular/core';
import {ServicioMarcasService} from "../servicio-marcas.service";

@Component({
  selector: 'app-modelo-detalle',
  templateUrl: './modelo-detalle.component.html',
  styleUrls: ['./modelo-detalle.component.css']
})
export class ModeloDetalleComponent implements OnInit {

  @Input() resultadosMarc: any;


  constructor(private data: ServicioMarcasService) { }

  ngOnInit() {

    this.data.mensajeActual2.subscribe(mensaje => this.resultadosMarc = mensaje)

  }

  identificadorFK(id: any){
    if(isNaN(id)){
      return id.id

    }else{
      return id
    }
  }

  limpiarLista(){

    /*var mostrarListModelos = <HTMLFormElement>document.getElementById('listaModelos');
    mostrarListModelos.style.display = "none";*/
  }




}
