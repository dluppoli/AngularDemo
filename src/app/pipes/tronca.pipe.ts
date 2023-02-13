import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'tronca'
})
export class TroncaPipe implements PipeTransform
{
    transform(value: string, limite?: number) {
        
        let realLimit = limite ?? 50;

        if( value.length>realLimit)
            return value.substring(0,realLimit) + '...(continua)...';   
        return value;
    }
}