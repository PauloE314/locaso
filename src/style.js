import { createGlobalStyle } from "styled-components";

export const breakPoints = {
  small: "700px",
  medium: "1000px",
};

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
