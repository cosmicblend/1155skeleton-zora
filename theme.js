import { extendTheme } from '@chakra-ui/react';

const customFontSizes = {
    'xs': '05rem',
    'sm': '0.707rem',
    'md': '1rem',
    'h6': '1.414rem',
    'h5': '1.999rem',
    'h4': '2.827rem',
    'h3': '3.998rem',
    'h2': '5.653rem',
    'h1': '7.993rem',
};

const tusTheme = extendTheme({
    fonts: {
        heading:'acumin-pro-extra-condensed, sans-serif;',
        body:'urw-antiqua, serif;',
    },
    fontWeights: {
        aecBlack: 800,
        aecBlackItalic: 800,
        urwRegular: 400,
        urwMedium: 500, 
    },
    lineHeights: {
        base: '1.6',
    },
    fontSizes: customFontSizes,
});

export default tusTheme;
