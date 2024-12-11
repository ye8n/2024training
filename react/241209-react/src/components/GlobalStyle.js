// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  // reset
  html,body,p,ol,ul,li,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0
  }
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style: none
}

button,
input,
select {
  margin: 0;
  outline: none;
}

html {
  box-sizing: border-box
}

*,
*::before,
*::after {
  box-sizing: inherit
}
audio, canvas, embed, iframe, img, object, svg, video {
  height: auto;
  width: 100%;
  vertical-align: top;
}

iframe {
  border: 0
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

td,
th {
  padding: 0
}

a {
  text-decoration: none;
  color: inherit
}
`;

export default GlobalStyle;