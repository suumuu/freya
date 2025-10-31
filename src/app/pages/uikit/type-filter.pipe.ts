import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeFilter',
  standalone: true
})
export class TypeFilterPipe implements PipeTransform {
  transform(options: any[], search: string): any[] {
    if (!options) return [];
    if (!search) return options;
    const lower = search.toLowerCase();
    return options.filter(opt =>
      (opt.label || '').toLowerCase().includes(lower)
    );
  }
}
