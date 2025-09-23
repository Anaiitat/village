import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  standalone: false,
  template: `
    <footer>
      <div class="logo">
        <a href="https://www.instagram.com/" target="_blank"
          ><img src="./assets/images/logo/instagram.png"
        /></a>
        <a href="https://www.facebook.com/" target="_blank"
          ><img src="./assets/images/logo/facebook.png"
        /></a>
        <a href="https://www.x.com/" target="_blank"
          ><img src="./assets/images/logo/twitter.png"
        /></a>
      </div>
    </footer>
  `,
  styles: `
  
footer{
  background-color: #F9D0A3;
  padding:10px;
  margin-top:50px
}

.logo{
  display:flex;
  justify-content:center;
  padding:20px;
}

.logo a {
  padding:10px;
}

.logo img{
  width:35px
}
  
  `,
})
export class Footer {}

