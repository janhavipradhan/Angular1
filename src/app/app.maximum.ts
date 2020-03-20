import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'max'
})
export class MaxPipe implements PipeTransform {
   transform(val: number[]) : number {
      return Math.max(...val);
   }
}