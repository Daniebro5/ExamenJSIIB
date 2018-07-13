import { Component, OnInit } from '@angular/core';
import {ServicioMarcasService} from "../servicio-marcas.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  datosFactura = []

  listaCompra = []

  items: number

  total: number

  constructor(private data: ServicioMarcasService, private httpClient: HttpClient) { }

  ngOnInit() {

    this.data.mensajeActual3.subscribe(mensaje => this.listaCompra = mensaje)

    this.data.mensajeActual4.subscribe(mensaje => this.datosFactura = mensaje)

    this.items = this.listaCompra.length

    //console.log(this.datosFactura)

  }

  eliminarItem(id){

    this.listaCompra.splice(id,1)

    this.mandarDatos();

  }

  mandarDatos(){

    this.data.cambiarMensaje3(this.listaCompra)

  }





}
