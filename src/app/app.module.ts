import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LibroComponent } from './components/libro/libro.component';
import { TroncaPipe } from './pipes/tronca.pipe';
import { LibriService } from './services/libri.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LibroComponent,
    TroncaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [LibriService],
  bootstrap: [AppComponent]
})
export class AppModule { }
