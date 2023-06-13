import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TocketComponent } from './component/tocket/tocket.component';
import { TicformComponent } from './component/ticform/ticform.component';
import { DivisalistComponent } from './component/divisalist/divisalist.component';
import { ProductoComponent } from './component/producto/producto.component';
import { ProductoformComponent } from './component/productoform/productoform.component';
import { DivisacComponent } from './component/divisac/divisac.component';

const routes: Routes = [
  {path:'slider',component:ProductoComponent},
{path:'altaprod',component:ProductoformComponent},

{path: 'lista divisa' , component : DivisalistComponent},
{path:'divisa',component:DivisacComponent},

  {path:'ticket',component:TocketComponent},
  {path:'ticform/:id',component:TicformComponent},
  {path:'ticket',component:TocketComponent},
  {path: 'ticform/:id',component:TicformComponent},
 // {path:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
