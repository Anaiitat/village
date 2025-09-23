import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: false,
  template: `
    <header class="site">
      <div class="site-header">
        <img src="./assets/images/logo/logo.png" alt="Logo" />
        <nav class="">
          <a routerLink="contact">Contact</a>
          <a routerLink="about">A Propos</a>
        </nav>
      </div>
    </header>
  `,
  styles: `

 .site {
      background-color: #F9D0A3;
    }

    .site img {
      width: 250px;
    }

    .site-header {
      display: flex;
      justify-content: space-between;
    }

    nav {
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      margin-right: 3rem;
    }

    nav a {
      margin: 2rem;
      font-size: 25px;
      font-family: 'Bubble Bold';
    }
  `,
})
export class Header {}
