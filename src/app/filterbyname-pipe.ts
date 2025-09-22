import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products.service';

@Pipe({
  name: "filterByName",
  standalone: false,
})
export class FilterByNamePipe implements PipeTransform {
  transform(items: Product[], searchText: string): Product[] {
    if (!items || !items.length) {
      return [];
    }

    if (!searchText || !searchText.trim()) {
      return items;
    }

    const lowerSearch = searchText.toLowerCase().trim();

    return items.filter((item) =>
      item.name.toLowerCase().includes(lowerSearch)
    );
  }
}

