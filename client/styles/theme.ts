import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500]
        },
        secondary: {
            main: green[500]
        }
    }
});

export default theme;
