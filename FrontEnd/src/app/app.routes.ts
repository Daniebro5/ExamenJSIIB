import {Routes} from "@angular/router";
import {NavegadorComponent} from "./navegador/navegador.component";
import {CarritoComponent} from "./carrito/carrito.component";
import {MarcaComponent} from "./marca/marca.component";
import {JuegoComponent} from "./modelo/juego.component";

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
    path: 'marca/:id/modelo/:idJuego',
    component: JuegoComponent
  },
  {
    path: 'marca/:id',
    component: MarcaComponent,
    children:
    [{

      path: 'modelo/:idJuego',
      component: JuegoComponent

    }]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
