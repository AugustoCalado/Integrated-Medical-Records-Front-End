import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VacinacaoComponent } from './vacinacao/vacinacao.component';

import { RouterModule, Routes } from '@angular/router';
import { EmergenciaComponent } from './emergencia/emergencia.component';
import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';
import { CardComponent } from './vacinacao/card/card.component';

const appRoutes: Routes = [
  // { path: '', redirectTo:'/vacinacao', pathMatch:'full'},
  { path: '', component: HomeComponent},
  { path: 'vacinacao', component: VacinacaoComponent },
  { path: 'emergencia', component: EmergenciaComponent },
  { path: 'ocorrencias', component: OcorrenciasComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    VacinacaoComponent,
    EmergenciaComponent,
    OcorrenciasComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
