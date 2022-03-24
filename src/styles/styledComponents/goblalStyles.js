import { createGlobalStyle } from "styled-components";




export const GoblalStyles = createGlobalStyle`
body, html {
  height: auto;
  min-height: 100vh;
  background-color: aqua;
}

* {
  box-sizing: border-box;
}
body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: url('https://res.cloudinary.com/davidcharif/image/upload/v1648061660/demoFakeApi/fondoBlur_oehe0l.png');
  background-repeat: repeat-y;
  
  background-size: cover;
 }
 
 
`