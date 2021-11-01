import { createGlobalStyle } from "styled-components";
import { breakPoints } from "./config";

const globalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
    
    --bg-color: #efefef;
    --bg-color-inverse: black;
    --primary-color: #00A0DB; 
    --secondary-color: #08A85B;

    @media (max-width: ${breakPoints.small}) {
      font-size: 18px;
    }
  }

  
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    -webkit-tap-highlight-color: transparent;
  }
  
  body {
    font-family: 'Roboto', 'sans-serif';
    background-color: var(--bg-color);
    color: var(---bg-color-inverse);
  }

  a {
    text-decoration: none;
  }

  button {
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`;

export default globalStyle;
