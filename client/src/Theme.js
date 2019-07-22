import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import background from './Assets/coffee-1255126.jpg';

const theme = createMuiTheme({
    palette: {
        // type: 'dark',
        primary: {
            main: "#212121",
        },
        secondary: {
            main: "#afb42b",
        },
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    objectFit: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'noRepeat',
                    // backgroundSize: 'cover',
                    backgroundImage: `url(${background})`
                },

            }
        }
    }
});

export default theme;