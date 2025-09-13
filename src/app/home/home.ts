import { Component, OnInit } from "@angular/core";
import { ProductsService, Product,  } from "../products.service";


@Component({
  selector: "app-home",
  standalone: false,
  template: `
    <app-header></app-header>
    <main>
      <section class="description">
        <p>
          Redécouvrez l’univers d’Astérix et Obélix à travers nos figurines
          artisanales, faites main avec passion. <br />Des créations uniques
          pour les nostalgiques des célèbres Gaulois !
        </p>
      </section>
      <section class="produit">
        <div>
          <h1>Produits</h1>
          <div>
            <input
              type="text"
              placeholder="Rechercher par nom"
              (input)="onSearch($event)"
              [value]="searchText"
            />
            <div *ngFor="let product of products | filterByName : searchText">
              <h2>{{ product.name }}</h2>
              <img [src]="product.imageUrl" />
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: `
  
  .description{
    display: flex;
    justify-content: center;
    padding: 15px
  }

  .description p {
    text-align: center;
    font-size : 22px;
    font-family: 'Bubble '
  }

  `,
})
export class Home implements OnInit {
  products: Product[] = [];
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchText = target.value;
  }

  searchText: string = "";
}
