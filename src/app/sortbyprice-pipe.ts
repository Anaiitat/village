import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "./products.service";

@Pipe({
  name: 'sortbyprice',
  standalone: false
})
export class SortbypricePipe implements PipeTransform {

  transform(value: Product[], order:"asc" | "desc" = "asc"): Product[]{
    if (!value) return []; 
    
    return [...value].sort((a, b) => {
      return order === "asc" ? a.price - b.price : b.price - a.price;
    });
  }

}
