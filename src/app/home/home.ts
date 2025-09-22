import { Component, OnInit } from "@angular/core";
import { ProductsService, Product } from "../products.service";

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
          <div class="trie">
            <div>
              <input
                type="text"
                placeholder="Rechercher par nom"
                (input)="onSearch($event)"
                [value]="searchText"
              />
            </div>
            <div>
              <label for="sort">Trier par : </label>
              <select id="sort" [(ngModel)]="sortOrder">
                <option value="asc">Prix Croissant</option>
                <option value="desc">Prix Décroissant</option>
              </select>
            </div>
          </div>
          <div class="produits">
            <div
              *ngFor="
                let product of products
                  | filterByName : searchText
                  | sortbyprice : sortOrder
              "
            >
              <h2>{{ product.name }}</h2>
              <img [src]="product.imageUrl" />
              <p>{{ product.price }}€</p>
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
    padding: 55px
  }

  .description p {
    text-align: center;
    font-size : 22px;
   
  }

  .produit{
    text-align:center;
    margin:20px;
    border-radius:10px;
    
  }

  .produit h1{
     color:#DA001E;
     font-size:50px;
  }

  .produits{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

  }

  .produits div{
    background-color:#F9D0A3;
    border:solid 2px #FDD90B;
    border-radius:15px;
    padding:10px;
     margin:10px;
  }

  .produits div img {
    width:300px;
    height:300px;
    border-radius:10px;
  }

  .trie{
    padding:30px;
    display:flex;
    justify-content: space-evenly;
  }

  .trie div{

  }
  
  `,
})
export class Home implements OnInit {
  products: Product[] = [];
  sortOrder: "asc" | "desc" = "asc";
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
