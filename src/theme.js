import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
  typography:{
    h6:{
      fontWeight:600
    }
  }
}))
export default theme