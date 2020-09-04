import { html, css, LitElement } from 'lit-element';

export class ItemApi extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      .card{
        margin:5px;
        border: 3px solid black;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        text-align: center;
        background-color: #009688;
        color:white;
        text-shadow: 1px 1px 2px black; 
        border-radius: 10px;
        box-shadow: 5px 5px #3c3c3c;
      }
      img{
        width:245px;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
      id: { type: String },
      imgUrl: { type: String }
    };
  }

  constructor() {
    super();
    this.name = "Alex Buendia";
    this.id = "1";
    this.imgUrl = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.imgUrl}" alt="Image"/>
        <strong><p>Name: ${this.name}</p></strong>
        <strong><p>ID: ${this.id}</p></strong>
      </div>
    `;
  }
}
