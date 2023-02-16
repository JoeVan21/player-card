import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PlayerCard extends LitElement {
  static properties = {
    header: { type: String },
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
  
  
  @media screen and (min-width:501px) and (max-width:800px) {
  
  }
  @media screen and (max-width:500px) {
    .card{
      font-size: 3vw
    }
  }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    <div class="buttons">
  
    <button class="btnDup">Duplicate</button>
    <button id="del">Delete</button>
    <button class="btnDet">Details</button> 
    <button class="btnHead">Change Header</button>
    <button  class="btnBack">Change Background</button>
    
    </div>
  
  <div class="borders">
    <div class="card">
    <h2>Nick Singleton </h2> 
  
  <img src=https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkyMjQwNTI1ODcxNDI1MDcw/nicholas-singleton.jpg alt="Nick Singleton" /> 
    
    <div>
      <p class="body" >Star Football Runningback for the Penn State Nittany Lions!<br>Big Ten's Freshman of the Year in 2022</p>
      </div>
    </div>
  </div>
    `;
  }
}

customElements.define('player-card', PlayerCard);
