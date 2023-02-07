import React from 'react';
import PropTypes from 'prop-types';

import { createTheme, ThemeProvider } from '@mui/material';
import palette from './palette';

const theme = createTheme(
    {
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
        palette: palette,
        // typography: {
        //     fontFamily: ["Mada", "arial"].join(","),
        //     h1: { fontSize: "36px", fontWeight: 500 },
        //     h2: { fontSize: "24px", fontWeight: 600 },
        //     h3: { fontSize: "20px", fontWeight: 400 },
        //     h4: { fontSize: "16px", fontWeight: 400 },
        //     h5: { fontSize: "18px", fontWeight: 500 },
        //     h6: { fontSize: "14px", fontWeight: 500 },
        //     body1: { fontSize: "14px", fontWeight: 400 },
        //     body2: { fontSize: "11px", fontWeight: 400 },
        // },

    }
);

const Theme = ({children}) => {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    );
};
Theme.propTypes = {
    children: PropTypes.element,
};

export default Theme;