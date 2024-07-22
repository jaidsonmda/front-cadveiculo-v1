import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VeiculoComponent} from "./veiculo/veiculo.component";

const routes: Routes = [
  {
    path:'veiculos',
    component:VeiculoComponent,
    data:{
      title: 'Veiculos'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
