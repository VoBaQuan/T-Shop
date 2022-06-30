import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatContent'
})
export class FormatContentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}
