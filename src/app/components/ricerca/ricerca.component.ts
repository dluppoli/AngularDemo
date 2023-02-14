import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent {
  
  @Output() cercaEvent = new EventEmitter();
  
  valore = '';

  cerca()
  { 
    this.cercaEvent.emit(this.valore);   
  }
  pulisci()
  {
      this.valore=''; 
      this.cercaEvent.emit(this.valore);  
  }
}
