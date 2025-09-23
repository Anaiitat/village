import { Component } from "@angular/core";

@Component({
  selector: "app-contact",
  standalone: false,
  template: `
    <app-header></app-header>
    <div class="contact">
      <h1>Contact</h1>
      <div>
        <form>
          <ul>
            <li>
              <label>Nom : </label>
              <input />
            </li>
            <li>
              <label>Prénom : </label>
              <input />
            </li>
            <li>
              <label>Email : </label>
              <input />
            </li>
            <li>
              <label>Message : </label>
              <textarea></textarea>
            </li>
            <div>
              <button>Envoyer le message</button>
            </div>
          </ul>
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916246075636!2d2.2944812999999997!3d48.858370099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1758636910002!5m2!1sfr!2sfr"
          width="500"
          height="350"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: `
  
.contact {
  display:flex;
  align-items: center;
  flex-direction: column;
  padding:20px;
}

.contact h1 {
  padding:30px;
  color:#DA001E
;
}

  .contact div{
    display: flex;
    padding:20px;
    
  }

  .contact form {
    padding : 20px;
  }

  .contact iframe {
    padding:20px
  }

  .contact ul {
    padding:0px;
  }

  .contact li{
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    
  }

  .contact input{
    width: 300px;
  }

  .contact textarea{
    width:400px;
    height:150px;
  }

  .contact button {
    margin-top:15px;
  }

  
  
  `,
})
export class Contact {}
