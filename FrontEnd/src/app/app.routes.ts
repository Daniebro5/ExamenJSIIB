import {Routes} from "@angular/router";
import {NavegadorComponent} from "./navegador/navegador.component";
import {CarritoComponent} from "./carrito/carrito.component";
import {MarcaComponent} from "./marca/marca.component";
import {ModeloComponent} from "./modelo/modelo.component";

export const RUTAS_APP: Routes = [
  {
    path: 'home',
    component: NavegadorComponent,
  },
  {
    path: 'carrito',
    component: CarritoComponent,
  },

  {
    path: 'marca/:id/modelo/:idModelo',
    component: ModeloComponent
  },
  {
    path: 'marca/:id',
    component: MarcaComponent,
    children:
    [{

      path: 'modelo/:idModelo',
      component: ModeloComponent

    }]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
