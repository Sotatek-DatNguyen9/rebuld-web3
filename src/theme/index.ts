import { createTheme } from '@mui/material/styles';
import React from 'react';

const defaultTheme = createTheme();

const custom = {
  success: '#3CC480',
  error: '#E57373',
  warning: '#F0B90B',
  white: '#FFFFFF',
  black: '#000000',
  grey: {
    '50': '#F7FCFB',
    '100': '#E6EBEA',
    '200': '#D4D9D8',
    '700': '#7E807F',
    '800': '#4B4D4C',
    '900': '#000000',
  },
  primary: '#6EC5B2',
  secondary: '#285D7A',
  background: '#F8FAFC',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f8fafc',
    },
    primary: {
      main: custom.primary,
      contrastText: custom.white,
    },
    secondary: {
      main: custom.secondary,
      contrastText: custom.white,
    },
    error: {
      main: custom.error,
      contrastText: custom.white,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
        outlined: {
          background: '#F7FCFB',
          padding: '24px 60px',
          border: '1px solid #6EC5B2',
          '@media (max-width:599px)': {
            padding: '16px',
          },
        },
        rounded: {
          boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.03)',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
      styleOverrides: {
        maxWidthLg: {
          maxWidth: '1189px !important',
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        maxWidth: 'sm',
        fullWidth: true,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '26px',
          fontWeight: 500,
          fontSize: 20,
          lineHeight: '28px',
        },
        contained: {
          padding: '14px 20px',
        },
        containedSecondary: {
          '&:hover': {
            boxShadow: '4px 4px 0px #4197C7',
            background: '#183748',
          },
          '&:active': {
            background: '#070F14',
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          '&:hover': {
            boxShadow: '4px 4px 0px #317094',
            background: '#6EC5B2',
          },
          '&:active': {
            background: '#5FAB9A',
            boxShadow: 'none',
          },
        },
      },
    },
    MuiToolbar: {
      defaultProps: {
        disableGutters: true,
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          lineHeight: '18px',
          fontWeight: 500,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        gutters: {
          padding: '12px 16px',
          lineHeight: '18px',
          fontSize: 14,
          fontWeight: 500,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          body: {
            WebkitTextSizeAdjust: 'none', // only on ios
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          background: '#E6EBEA',
        },
        label: {
          padding: '6px 16px',
          color: '#7E807F',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '14px',
          lineHeight: '20px',
          '@media (max-width:599px)': {
            fontSize: '11px',
            padding: '4px 8px',
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        positionStart: {
          marginLeft: '12px',
          marginRight: '12px',
        },
        positionEnd: {
          marginLeft: '12px',
          marginRight: '12px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: '16px',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '40px 40px 24px 40px',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '8px 40px 40px',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          marginTop: 4,
          lineHeight: '18px',
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #383C43',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td': {
            borderBottom: 0,
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          padding: 8,
          fontSize: 12,
          lineHeight: '18px',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          height: 18,
          minWidth: 18,
          lineHeight: '15px',
          padding: '0px',
          fontWeight: 'bold',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        outlined: {
          color: '#B1B5B4',
          borderColor: '#B1B5B4',
          '&.Mui-selected': {
            background: 'none',
          },
          '@media (max-width:599px)': {
            fontSize: '14px',
            lineHeight: '24px',
            fontWeight: 500,
          },
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        TabIndicatorProps: {
          children: React.createElement('span'),
          // @ts-ignore
          sx: {
            backgroundColor: 'transparent',
            bottom: 4,
            height: 'calc(100% - 8px)',
            textAlign: 'center',

            '& span': {
              display: 'inline-block',
              height: '100%',
              backgroundColor: 'primary.main',
              borderRadius: '50px',
              width: 'calc(100% - 8px)',
            },
          },
        },
      },
      styleOverrides: {
        root: {
          minHeight: 40,
          marginBottom: 24,
          borderRadius: '50px',
          whiteSpace: 'nowrap',
        },
      },
    },
    MuiTab: {
      defaultProps: { wrapped: false },
      styleOverrides: {
        root: {
          color: '#000000',
          textTransform: 'none',
          minHeight: 'unset',
          minWidth: 'unset',
          maxWidth: 'unset',
          padding: '12px 56px',
          fontSize: 20,
          lineHeight: '28px',
          transition: defaultTheme.transitions.create('color'),
          [defaultTheme.breakpoints.down('md')]: {
            padding: '6px 16px',
            fontSize: 14,
            lineHeight: '24px',
          },
          [`&.Mui-selected`]: {
            color: '#fff',
          },
          zIndex: 1,
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: 'Inter',
    fontSize: 14,
    h1: {
      fontSize: '36px',
      lineHeight: '40px',
      fontWeight: 500,
    },
    h2: {
      fontSize: '30px',
      lineHeight: '36px',
      fontWeight: 500,
    },
    h3: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 500,
    },
    h4: {
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: 500,
    },
    h5: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 500,
    },
    h6: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    body1: {
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
    },
    body2: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      color: '#4B4D4C',
    },
    caption: {
      fontSize: '16px',
      lineHeight: '24px',
      color: '#7E807F',
      fontWeight: 'normal',
    },
  },
});

export default theme;
export * from './useGlobalStyles';
