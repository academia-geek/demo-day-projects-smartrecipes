import { createGlobalStyle } from "styled-components";




export const GoblalStyles = createGlobalStyle`
body, html {
  height: auto;
  min-height: 100vh;
  background: #43C6AC;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #F8FFAE, #43C6AC);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #F8FFAE, #43C6AC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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