import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LibroComponent } from './components/libro/libro.component';
import { TroncaPipe } from './pipes/tronca.pipe';
import { LibriService } from './services/libri.service';
import { RicercaComponent } from './components/ricerca/ricerca.component';
import { FormsModule } from '@angular/forms';
import { ElencoLibriComponent } from './components/elenco-libri/elenco-libri.component';
import { AppRoutingModule } from './app-routing.module';
import { DettaglioLibroComponent } from './components/dettaglio-libro/dettaglio-libro.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LibroComponent,
    TroncaPipe,
    RicercaComponent,
    ElencoLibriComponent,
    DettaglioLibroComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LibriService],
  bootstrap: [AppComponent]
})
export class AppModule { }
