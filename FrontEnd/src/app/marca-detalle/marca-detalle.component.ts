import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-marca-detalle',
  templateUrl: './marca-detalle.component.html',
  styleUrls: ['./marca-detalle.component.css']
})
export class MarcaDetalleComponent implements OnInit {

  marcaDetalle: any

  datosHijos: any

  constructor(private _activatedRoute: ActivatedRoute, private httpClient: HttpClient ) {

    this._activatedRoute.params.subscribe(params =>{

      this.obtenerDatos(params['id']);

    });

  }

  ngOnInit() {
  }

  obtenerDatos(id){
    this.httpClient.get(`http://localhost:1337/desarrolladora?id=${id}`)
      .subscribe(
        (data:any[]) => {

          this.marcaDetalle = data

          this.datosHijos = data[0].modelos

        }

      )

  }

}
