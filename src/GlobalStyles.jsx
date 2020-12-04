import {createGlobalStyle} from 'styled-components';
import PoppinsBold from './assets/fonts/Poppins-Bold.ttf';
import PoppinsBoldItalic from './assets/fonts/Poppins-BoldItalic.ttf';
import PoppinsItalic from './assets/fonts/Poppins-Italic.ttf';
import PoppinsLight from './assets/fonts/Poppins-Light.ttf';
import PoppinsLightItalic from './assets/fonts/Poppins-LightItalic.ttf';
import PoppinsRegular from './assets/fonts/Poppins-Regular.ttf';
import PoppinsSemiBold from './assets/fonts/Poppins-SemiBold.ttf';
import PoppinsSemiBoldItalic from './assets/fonts/Poppins-SemiBoldItalic.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: Poppins;
    src: local("Poppins"), local("Poppins-Regular"), local("Poppins Regular"), url(${PoppinsRegular});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: Poppins;
    src: local("Poppins Italic"), local("Poppins-Italic"), url(${PoppinsItalic});
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: Poppins;
    src: local("Poppins Light"), local("Poppins-Light"), url(${PoppinsLight});
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: Poppins;
    src: local("Poppins Light Italic"), local("Poppins-Light-Italic"), url(${PoppinsLightItalic});
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: Poppins;
    src: local("Poppins SemiBold"), local("Poppins-SemiBold"), url(${PoppinsSemiBold});
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: Poppins;
    src: local("Poppins SemiBold Italic"), local("Poppins-SemiBold-Italic"), url(${PoppinsSemiBoldItalic});
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: Poppins;
    src: local("Poppins Bold"), local("Poppins-Bold"), url(${PoppinsBold});
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: Poppins;
    src: local("Poppins Bold Italic"), local("Poppins-Bold-Italic"), url(${PoppinsBoldItalic});
    font-weight: 700;
    font-style: italic;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;
