import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home'
import { About } from "./about/about";
import { Contact } from "./contact/contact";
import { Produit } from "./produit/produit";

const routes: Routes = [
  { path: "", component: Home },
  { path: "about", component: About },
  { path: "contact", component: Contact },
  { path: "produit/:id", component: Produit },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
