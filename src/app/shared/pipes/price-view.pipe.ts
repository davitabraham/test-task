import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceView'
})
export class PriceViewPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.toString().replace('.', ',');
  }

}
