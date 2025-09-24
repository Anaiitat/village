import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService, Product } from "../products.service";

@Component({
  selector: "app-produit",
  standalone: false,
  template: ` <app-header></app-header>
    <div *ngIf="product" class="produits">
      <h1>{{ product.name }}</h1>
      <div class="produit">
        <div>
          <img [src]="product.imageUrl" />
          <p class="description">{{ product.description }}</p>
        </div>
        <div class="stockprix">
          <p>{{ product.price }}€</p>
          <p
            [ngStyle]="{
              color: product?.stockStatus === 'En stock' ? 'green' : 'red'
            }"
          >
            {{ product.stockStatus }}
          </p>
        </div>
      </div>
    </div>
    <app-footer></app-footer>`,
  styles: `
  

  .produits{
    display:flex;
    flex-direction:column;
    align-items:center;
    margin: 50px;
     background-color:#F9D0A3;
    border:solid 2px #FDD90B;
    border-radius:15px;
  }

  .produits h1{
    color:#DA001E;
    padding:20px;
  }

  .produit div{
    display:flex;
    align-items:center;
    justify-content:space-around;
  }

  .produit img{
    width:500px;
    padding:20px
  }

  .description{
    padding:20px;
    text-align:center;
    width:400px;
    font-size:18px
  }

  .stockprix {
    font-size:20px;
    justify-content:space-around;
    
  }

  .text-green {
  color: green;
  font-weight: bold;
}

.text-red {
  color: red;
  font-weight: bold;
}
  `,
})
export class Produit implements OnInit {
  product: (Product & { stockStatus?: string }) | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get("id");
    const id = idParam ? Number(idParam) : 0;

    const p = this.productsService.getProductById(id);

    if (p) {
      this.product = {
        ...p,
        stockStatus: p.inStock ? "En stock" : "Épuisé",
      };
    }
  }
}
