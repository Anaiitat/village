import { Component, signal } from '@angular/core';

@Component({
  selector: "app-root",
  template: `
    <app-header></app-header>
    <router-outlet />
  `,
  standalone: false,
  styles: [],
})
export class App {
  protected readonly title = signal("village");
  ngOnInit(): void {
    document.body.classList.add("app-body");
  }
}
