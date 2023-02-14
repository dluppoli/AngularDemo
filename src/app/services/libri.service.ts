import { Injectable } from "@angular/core";
import { Libro } from "../models/libro";

@Injectable()
export class LibriService
{
    private libri:Libro[] = [
        new Libro(
            1,
            'La concessione del telefono',
            'Andrea Camilleri',
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam',
            12,
            'camilleri.jpg'
          ),
        new Libro(
            2,
            'La divina commedia',
            'Dante Alighieri',
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam',
            24,
            'divinacommedia.jpg'
        )
    ]

    getAll() : Libro[]
    {
        return this.libri;
    }

    getRandom() : Libro
    {
        return this.libri[0];
    }

    add(l:Libro)
    {
        this.libri.push(l);
    }

    cerca(valore: string): Libro[] {
        return this.libri.filter( l => l.autore.includes(valore) || l.titolo.includes(valore));    
    }

    getOne(id:number) : Libro | undefined{
        return this.libri.find(l => l.id == id);
    }
}