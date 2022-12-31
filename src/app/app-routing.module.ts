import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidoComponent } from './partido/partido.component';

const routes: Routes = [{path:'partido',component:PartidoComponent}];
// const routes: Routes = [{ path: '', redirectTo: '', pathMatch: 'full',component:InicioComponent },
// { path:'inicio', component: InicioComponent },
// { path:'pedido', component: PedidoComponent },
// { path:'articulo', component: ArticuloComponent },
// { path:'consultaPedido', component: ConsultapedidosComponent },
// {path:'compraArticulo',component:ComprarArticuloComponent},
// {path:'masVendidos',component:MasVendidosComponent},
// {path:'**',component:MasVendidosComponent},
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
