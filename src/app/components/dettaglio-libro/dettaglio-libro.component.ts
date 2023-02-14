import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { LibriService } from 'src/app/services/libri.service';

@Component({
  selector: 'app-dettaglio-libro',
  templateUrl: './dettaglio-libro.component.html',
  styleUrls: ['./dettaglio-libro.component.css']
})
export class DettaglioLibroComponent {

  libro?:Libro;
  constructor(private route:ActivatedRoute, private service:LibriService)
  {
    let id = +this.route.snapshot.params['id'];
    this.libro = service.getOne(id);
  }

}
