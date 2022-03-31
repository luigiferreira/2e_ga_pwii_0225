import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CarrosComponent } from './components/carros/carros.component';
import { HomeComponent } from './components/home/home.component';
import { MotosComponent } from './components/motos/motos.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "mt", component: MotosComponent },
  { path: "car", component: CarrosComponent },
  { path: "cad", component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
