import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VaccineCardComponent } from './vacinacao/card/vaccine-card.component';
import { EmergenciaComponent } from './emergencia/emergencia.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';
import { OccurrenceCardComponent } from './ocorrencias/card/occurrence-card.component';
import { VacinacaoComponent } from './vacinacao/vacinacao.component';

import { RouterModule, Routes } from '@angular/router';


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
    VaccineCardComponent,
    OccurrenceCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
