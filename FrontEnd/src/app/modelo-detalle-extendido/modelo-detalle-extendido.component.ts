import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {ServicioMarcasService} from "../servicio-marcas.service";

@Component({
  selector: 'app-modelo-detalle-extendido',
  templateUrl: './modelo-detalle-extendido.component.html',
  styleUrls: ['./modelo-detalle-extendido.component.css']
})
export class ModeloDetalleExtendidoComponent implements OnInit {

  modeloDetalle = {
    nombreModelo: '',
    tipoAuto: '',
    fechaLanzamiento: '',
    precio: '',
    estado: '',
    imagenModelo: '',
    id: ''
  }

  estadoIni: any

  arregloCarrito = []

  constructor(private httpClient: HttpClient, private _activatedRoute: ActivatedRoute, private data: ServicioMarcasService) {

    this._activatedRoute.params.subscribe(params =>{

      this.obtenerDatos(params['idModelo']);

    });

  }

  ngOnInit() {

    this.data.mensajeActual3.subscribe(mensaje => this.arregloCarrito = mensaje)


  }

  obtenerDatos(id){
    this.httpClient.get(`http://localhost:1337/modelo?id=${id}`)
      .subscribe(
        (data:any[]) => {

          this.modeloDetalle = data[0]

          //Pasar funcion con parametro para probar

          this.estadoIni = this.modeloDetalle.estado

          this.verEstado(this.estadoIni)

        }

      )

  }

  agregarDatos(id) {

    this.cambiarEstado(id)

    this.arregloCarrito.push(this.modeloDetalle)

    this.ocultarElementos()

    this.mandarDatos()

  }

  mandarDatos() {

    this.data.cambiarMensaje3(this.arregloCarrito)
  }

  cambiarEstado(id){
    this.httpClient.put(`http://localhost:1337/modelo/${id}`, {

      estado : false

    }).subscribe(
      res => {
        //console.log(res);
      }
    );
  }

  ocultarElementos() {

    /*var mostrarLabelMarca = <HTMLFormElement>document.getElementById('tituloMod');
    mostrarLabelMarca.style.display = "none";

    var mostrarLabelModelo = <HTMLFormElement>document.getElementById('tituloModelo');
    mostrarLabelModelo.style.display = "none";

    var mostrarModelos = <HTMLFormElement>document.getElementById('disponible');
    mostrarModelos.style.display = "none";

    var mostrarListModelos = <HTMLFormElement>document.getElementById('listaModelos');
    mostrarListModelos.style.display = "none";*/

  }

  verEstado(estado){

    console.log('estado ', estado)

    if(estado){

      var mostrarListModelos = <HTMLFormElement>document.getElementById('botonAgregarCarrito');
      mostrarListModelos.style.display = "block";
      var mostrarListModelos = <HTMLFormElement>document.getElementById('noDisponible');
      mostrarListModelos.style.display = "none";

    }else{

      var mostrarListModelos = <HTMLFormElement>document.getElementById('botonAgregarCarrito');
      mostrarListModelos.style.display = "none";
      var mostrarListModelos = <HTMLFormElement>document.getElementById('noDisponible');
      mostrarListModelos.style.display = "block";

    }

  }



}
