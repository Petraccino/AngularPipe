import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs';

@Pipe({
  name: 'ucfirst',
  standalone: true
})
export class UcfirstPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .split(' ')
      .map(
        (word: string) =>
          ' ' + word.substring(0, 1).toUpperCase() +  word.substring(1)
      )
      .join('');
  }
}
