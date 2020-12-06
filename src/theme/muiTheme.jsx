import {createMuiTheme} from '@material-ui/core';
import {
  textAlt,
  main,
  mainDark,
  mainLight,
  secondary,
  secondaryDark,
  secondaryLight,
  error,
  errorDark,
  errorLight,
  warning,
  warningDark,
  warningLight,
  info,
  infoDark,
  infoLight,
  success,
  successDark,
  successLight,
  text,
} from './colors';

export default createMuiTheme({
  typography: {
    fontFamily: `Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  primary: {
    light: mainLight,
    dark: mainDark,
    main,
    contrastText: textAlt,
  },
  secondary: {
    light: secondaryLight,
    dark: secondaryDark,
    main: secondary,
    contrastText: textAlt,
  },
  error: {
    light: errorLight,
    dark: errorDark,
    main: error,
    contrastText: textAlt,
  },
  warning: {
    light: warningLight,
    dark: warningDark,
    main: warning,
    contrastText: text,
  },
  info: {
    light: infoLight,
    dark: infoDark,
    main: info,
    contrastText: textAlt,
  },
  success: {
    light: successLight,
    dark: successDark,
    main: success,
    contrastText: textAlt,
  },
});
