import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarrosComponent } from './components/carros/carros.component';
import { MotosComponent } from './components/motos/motos.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrosComponent,
    MotosComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
