import { createGlobalStyle } from "styled-components";




export const GoblalStyles = createGlobalStyle`
body, html {
  height: 100%; //auto
}

* {
  box-sizing: border-box;
}
body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: url('https://res.cloudinary.com/davidcharif/image/upload/v1647987221/demoFakeApi/fondoNoBlur_q3t5pn.png');
  background-repeat: no-repeat;
  background-size: cover;
 }
 .blur{
  filter: blur(8px);
  -webkit-filter: blur(8px);
 }
 
`