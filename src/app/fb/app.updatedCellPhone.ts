import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'updatedCellPhone'
})
export class usdPnoPipe implements PipeTransform {
    transform(val) {
        if (val && (val.length === 3 || val.length === 7)) {
            val = val + '-';
        }
        return val;
    }
}