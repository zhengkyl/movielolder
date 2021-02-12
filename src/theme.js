import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
  typography:{
    h2:{
      fontWeight:600,
    },
    h4:{
      fontWeight:600
    },
    h6:{
      fontWeight:600
    }
  }
}))
export default theme