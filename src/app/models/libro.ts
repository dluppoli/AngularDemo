export class Libro
{
    constructor(
        public titolo:string,
        public autore: string,
        public abstract:string,
        public prezzo:number,
        public immagine:string,
        public preferito:boolean=false
    ) { }
}