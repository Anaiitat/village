import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  standalone: false,
  template: `
    <app-header></app-header>
    <div class="presentation">
      <h1>Bienvenue Au petit village 🛡️</h1>
      <p>
        Plongez dans l’univers légendaire d’Astérix et Obélix grâce à nos
        figurines faites main, uniques et pleines de caractère.
      </p>
      <p>
        Passionnés par l’artisanat et inspirés par la célèbre bande dessinée,
        nous donnons vie aux héros gaulois à travers des créations originales,
        réalisées avec soin et minutie. Chaque figurine raconte une histoire,
        entre tradition et nostalgie.
      </p>
      <p>
        Notre objectif ? Offrir aux amoureux de la BD, un
        retour en enfance et la possibilité de redécouvrir leurs personnages
        préférés sous un nouvel angle.
      </p>
      <p>
        👉 Découvrez notre collection, laissez-vous séduire par nos pièces
        uniques, et contactez-nous pour toute question ou commande spéciale.
      </p>
    </div>
    <app-footer></app-footer>
  `,
  styles: `
  
.presentation{
  padding: 30px;
  display:flex;
  flex-direction: column;
  align-items: center;
}

.presentation h1 {
  color: #DA001E;
  padding: 40px;
}

.presentation p {
  text-align: center;
  margin: 30px;
}

  `,
})
export class About {}
