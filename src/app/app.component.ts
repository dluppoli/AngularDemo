import { Component } from '@angular/core';
import { Libro } from './models/libro';
import { LibriService } from './services/libri.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Libreria';
  libri:Libro[];

  constructor(private service:LibriService)
  {
    this.libri = service.getAll();
  }

  cerca(valore:string) {
    this.libri = this.service.cerca(valore);
  }
}
