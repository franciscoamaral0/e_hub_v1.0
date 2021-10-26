import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'


let theme = createTheme ({
  palette: {
    primary: {
      main: '#002f34',
    },
    secondary:{
      main: '#ffffff'
    },
    background: {
      default: 'rgb(242,244,245)',
      white: '#ffffff'
  
    }
  }
})


// theme = responsiveFontSizes(theme);
export default theme
