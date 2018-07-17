import { Component, OnInit } from '@angular/core';
import {RUTAS_APP} from "../app.routes";
import {HttpClient} from "@angular/common/http";
import {ServicioMarcasService} from "../servicio-marcas.service";

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {

  buscar: string = ""

  respuestaServerMod = []

  respuestaServerMarc = []

  constructor(private httpClient: HttpClient,private httpClient2: HttpClient, private data: ServicioMarcasService){
  }

  ngOnInit() {

    this.data.mensajeActual.subscribe(mensaje => this.respuestaServerMod = mensaje)

    this.data.mensajeActual2.subscribe(mensaje => this.respuestaServerMarc = mensaje)

    this.ocultarElementos()

  }

  onNameKeyUp(event:any){

    this.buscar = event.target.value;

  }

  getProfile(){

    this.httpClient.get(`http://localhost:1337/marca?where={"nombre":{"contains":"${this.buscar}"}}`)
      .subscribe(
        (data:any[]) => {

          this.respuestaServerMod = data

        }

      )

    this.httpClient2.get(`http://localhost:1337/modelo?where={"nombreModelo":{"contains":"${this.buscar}"}}`)
      .subscribe(
        (data:any[]) => {

          this.respuestaServerMarc = data

        }

      )

    this.mandarDatos()

    this.mostrarElementos()

  }

  mandarDatos(){

    this.data.cambiarMensaje(this.respuestaServerMod)
    this.data.cambiarMensaje2(this.respuestaServerMarc)
  }

  mostrarElementos() {

    var mostrarLabelMarca = <HTMLFormElement>document.getElementById('marca');
    mostrarLabelMarca.style.display = "block";

    var mostrarLabelModelo = <HTMLFormElement>document.getElementById('modelo');
    mostrarLabelModelo.style.display = "block";

  }

  ocultarElementos() {

    var mostrarLabelMarca = <HTMLFormElement>document.getElementById('marca');
    mostrarLabelMarca.style.display = "none";

    var mostrarLabelModelo = <HTMLFormElement>document.getElementById('modelo');
    mostrarLabelModelo.style.display = "none";

  }


}
