import { createGlobalStyle } from "styled-components";
import { colors } from "./_variables";

const GlobalStyle = createGlobalStyle`
   html,body {
      background-color: ${colors.themeDark};
      color: ${colors.darkWhiteMedium};
      font-family: 'Source Code Pro', monospace;
   }

   i {color: white}

   em {color: ${colors.darkWhiteEmphasis}}

   .artwork {
    position:absolute;
    right: 2vw;
    height: 360vh;
    opacity: 15%;
    border-right: 6px solid white}

    .swirl {
   position: fixed;
   height: 15px;
   width: 15px; 
   border-radius: 50%;
   background-color: white;
   opacity: 35%;
   right: -5vw;
   top: 50%;
   z-index: 55;
      -webkit-animation: linear infinite;
      -webkit-animation-name: run;
      -webkit-animation-duration: 3s;
    }

    @-webkit-keyframes run {
  0% {
    left: 104%;
  }
  50% {
    left: 108.2%;
  }
  100% {
    left: 104%;    
  }
}
`;

export default GlobalStyle