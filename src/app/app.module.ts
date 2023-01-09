import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ImagenCentralComponent } from './components/imagen-central/imagen-central.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { VentanaLoginComponent } from './components/ventana-login/ventana-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImagenCentralComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    EducacionComponent,
    ProyectosComponent,
    FooterComponent,
    VentanaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
