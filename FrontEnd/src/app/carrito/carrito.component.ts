import { Component, OnInit } from '@angular/core';
import {ServicioMarcasService} from "../servicio-marcas.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  datosFactura : {nombre: string, apellido: string, direccion: string}

  listaCompra = []

  items: number

  total: number

  constructor(private data: ServicioMarcasService, private httpClient: HttpClient) { }

  ngOnInit() {

    this.data.mensajeActual3.subscribe(mensaje => this.listaCompra = mensaje)

    this.data.mensajeActual4.subscribe(mensaje => this.datosFactura = mensaje)

    this.items = this.listaCompra.length

    this.calcularTotal()

    this.ocultar()

  }

  eliminarItem(idArreglo, idModelo){

    this.total -= parseFloat(this.listaCompra[idArreglo].precio)

    this.listaCompra.splice(idArreglo,1)

    this.cambiarEstado(idModelo)

    this.ocultar();

    this.mandarDatos();

  }

  mandarDatos(){

    this.data.cambiarMensaje3(this.listaCompra)

  }

  private calcularTotal() {
    this.total = this.listaCompra.reduce((acumulador, actual) => {
      acumulador += parseFloat(actual.precio);
      return acumulador;
    }, 0);
  }

  cambiarEstado(id){
    this.httpClient.put(`http://localhost:1337/modelo/${id}`, {

      estado : true

    }).subscribe(
      res => {
        //console.log(res);
      }
    );
  }

  completarOrden(){

    for(let i=0; i<this.listaCompra.length; i++){

      this.cambiarEstado(this.listaCompra[i].id)

    }

    this.total = 0

    this.listaCompra = []

    this.mandarDatos();

  }

  ocultar(){

    if(this.listaCompra.length == 0){

      var mostrarListModelos = <HTMLFormElement>document.getElementById('modelosComprar');
      mostrarListModelos.style.display = "none";

    }

  }


}
