import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LibroComponent } from './components/libro/libro.component';
import { TroncaPipe } from './pipes/tronca.pipe';
import { LibriService } from './services/libri.service';
import { RicercaComponent } from './components/ricerca/ricerca.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LibroComponent,
    TroncaPipe,
    RicercaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LibriService],
  bootstrap: [AppComponent]
})
export class AppModule { }
