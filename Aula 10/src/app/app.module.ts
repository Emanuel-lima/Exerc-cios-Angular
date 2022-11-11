import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTopoComponent } from './compartilhado/menu-topo/menu-topo.component';
import { RodapeComponent } from './compartilhado/rodape/rodape.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PageNotFoundComponent } from './compartilhado/page-not-found/page-not-found.component';
import { PaiComponent } from './pai/pai.component';
import { Filho1Component } from './pai/filho1/filho1.component';
import { Filho2Component } from './pai/filho2/filho2.component';
import { FormsModule } from '@angular/forms';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';
import { CalcularMediaComponent } from './calcula-media-simples/calcula-media-simples.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcularMediaComponent,
    MenuTopoComponent,
    RodapeComponent,
    CalculadoraComponent,
    PageNotFoundComponent,
    PaiComponent,
    Filho1Component,
    Filho2Component,
    ApoliceSeguroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
