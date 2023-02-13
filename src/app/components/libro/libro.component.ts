import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibriService } from 'src/app/services/libri.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {
  libro:Libro;

  constructor(service:LibriService)
  {
    this.libro=service.getRandom();
  }

  modificaPreferito()
  {
    this.libro.preferito = !this.libro.preferito;
  }
}
