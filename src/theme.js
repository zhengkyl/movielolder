import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
  palette:{
    primary:{
      main:"#ff5050"
    }
  },
  typography:{
    h1:{
      fontWeight:600,
    },
    h2:{
      fontWeight:600,
    },
    h3:{
      fontWeight:600,
    },
    h4:{
      fontWeight:600
    },
    h5:{
      fontWeight:600
    },
    h6:{
      fontWeight:600
    }
  }
}))
export default theme