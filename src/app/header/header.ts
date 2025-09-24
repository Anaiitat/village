import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: false,
  template: `
    <header class="site">
      <div class="site-header">
        <a routerLink="/">
          <img src="./assets/images/logo/logo.png" alt="Logo" />
        </a>
        <nav [class.open]="menuOpen">
          <a routerLink="/contact" (click)="menuOpen = false">Contact</a>
          <a routerLink="/about" (click)="menuOpen = false">A Propos</a>
        </nav>
        <div id="icons" (click)="toggleMenu()"></div>
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
      text-decoration:none;
      color:#151217;
    }

    nav a:hover{
      color:#DA001E;
    }

    #icons{
      cursor: pointer;
      display:none;
      
    }

     #icons:before {
        content:"\u2630";
      }


    @media (max-width:1024px) {
      #icons{
        display: block;
        font-size:50px;
         margin-top: 60px;
    padding-right:50px
      }

      nav {
         display: none;
    position: absolute;
    top: 120px;
    right: 0;
    background-color: #F9D0A3;
    flex-direction: column;
    width: 200px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  nav.open {
    display: flex; 
    
    ;
    
  }
     
    }
  `,
})
export class Header {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
