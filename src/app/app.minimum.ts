import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'min'
})
export class MinPipe implements PipeTransform {
   transform(val: number[]) : number {
      return Math.min(...val);
   }
}