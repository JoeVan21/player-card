import { LitElement, html, css } from 'lit';

const playerImg = new URL('../assets/nicks.jpg', import.meta.url).href;
import "@lrnwebcomponents/meme-maker/meme-maker.js";
class PlayerCard extends LitElement {
  static properties = {
    name: { type: String },
    sum: {type: String},
    top:{type: String},
    bottom:{type: String},
  };

  static styles = css`
  img{
    max-width: 400px;
  }
  button {
    cursor:pointer;
    margin: 1px;
    border: 2px dashed blue;
    color:#00FFFF; 
    background-color: black;
    border-radius:20px;
   text-transform: uppercase;
  padding: 8px 8px;
  }
  .card {
    font-size: 15px;
    margin: 5px;
    padding: 10px;
    text-align:center;
    border: solid blue 10px;
    padding: 8px;
    max-width: 400px;
  }
  .borders {
   justify-content:center;
    display:flex;
  }
  button:hover{
    background-color: #0400FE;
  }
  
  button:focus{
    background-color: #0400FE;
  }
  
  
  @media screen and (max-width:501px) and (max-width:800px) {
    background-color: Red;
    text-transform: var;
    width: var;
  }
  @media screen and (max-width:500px) {
    .card{
      font-size: 3vw;
      background-color: Blue;
      text-transform: var;
      width: var;
    }
  }
  `;


  constructor() {
    super();
    this.sum = 'Details';
    this.name='Nick S';
    this.top = 'Big';
    this.bottom = 'Ten';
  }

  render() {
    return html`
  
  <div class="borders">
    <div class="card">
    <h2>${this.name}</h2> 
  
  
  <meme-maker image-url="${playerImg}"
  top-text="${this.top}"
  bottom-text="${this.bottom}">
</meme-maker>
    <div>
    <details class="details">
          <summary>${this.sum}</summary>
          <div>
            <slot></slot>
          </div>
        </details>

     
      </div>
    </div>
  </div>
    `;
  }
}

customElements.define('player-card', PlayerCard);
