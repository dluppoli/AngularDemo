import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { LibriService } from 'src/app/services/libri.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {
  @Input() libro?:Libro;

  constructor(/*service:LibriService*/ private router:Router)
  {
    //this.libro=service.getRandom();
  }

  modificaPreferito()
  {
    if(this.libro) this.libro.preferito = !this.libro.preferito;
  }

  dettaglio()
  {
    this.router.navigate(['libro',this.libro?.id]);
  }
}
