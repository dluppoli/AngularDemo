import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibriService } from 'src/app/services/libri.service';

@Component({
  selector: 'app-elenco-libri',
  templateUrl: './elenco-libri.component.html',
  styleUrls: ['./elenco-libri.component.css']
})
export class ElencoLibriComponent {
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
