import { createTheme } from "@mui/material/styles";
import EudoxusSans from "../fonts/EudoxusSans-Medium.ttf";
import { StarIcon, MenuIcon, CheckboxIcon, CheckboxCheckedIcon, CheckboxIndeterminateIcon, InfoIcon, SuccessIcon, WarningIcon, ErrorIcon } from "./CustomIcons";

const eudoxusSans = {
  fontFamily: "Eudoxus Sans",
  fontStyle: "medium",
  // fontDisplay: 'swap',
  // fontWeight: '600',
  src: `
    local('EudoxusSans'),
    local('EudoxusSans-Medium'),
    url(${EudoxusSans}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const ICON_SMALL = { width: 20, height: 20 };
const ICON_LARGE = { width: 28, height: 28 };

export default createTheme({
  typography: {
    fontFamily: "Eudoxus Sans",
  },

  palette: {
    primary: {
      main: "#1AA3E9",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": [eudoxusSans],
        "a:link": {
          textDecoration: "none",
        },
        html: {
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          overflowX: "hidden",
        },
        ".banner": {
          background: "url(/img/banner-bg.png) no-repeat center",
          backgroundSize: "cover",
          height: "calc( 100vh - 120px )",
          display: "flex!important",
          alignItems: "center",
          maxWidth: "1920px!important",
        },
        ".banner-2": {
          background: "url(/img/banner-bg-2.png) no-repeat center",
          backgroundSize: "cover",
          height: "calc( 100vh - 120px )",
          display: "flex!important",
          alignItems: "center",
          maxWidth: "1920px!important",
        },
        ".banner-3": {
          background: "url(/img/banner-bg-3.png) no-repeat center",
          backgroundSize: "cover",
          height: "calc( 100vh - 120px )",
          display: "flex!important",
          alignItems: "center",
          maxWidth: "1920px!important",
        },

        ".MuiMobileStepper-dots": {
          flex: "1 100%",
          display: "flex",
          justifyContent: "center",
        },
        ".searchbox": {
          width: "calc(100% - 148px)",
          height: 67,
          "& > div": {
            height: "100%",
            borderRadius: 16,
            "&:not(.noshadow)": {
              boxShadow: "0px 4px 8px rgba(0,0,0,0.08)",
            },
            marginRight: 19,
            borderColor: "#D9DBE9",
            backgroundColor: "#ffffff",
          },
        },
        ".category-card": {
          fontFamily: "Eudoxus Sans",
          position: "relative",
          width: 500,
          minHeight: 162,
          backgroundColor: "#fcfcfc",
          boxShadow: "0px 12px 24px -4px rgba(110, 113, 145, 0.12)",
          padding: 32,
          borderBottom: "8px solid transparent",
          "&:hover": {
            cursor: "pointer",
            h2: {
              color: "#1AA3E9",
            },
            borderBottomColor: "#1AA3E9",
            boxShadow: "none",
          },

          h2: {
            fontWeight: 800,
            letterSpacing: 1,
            fontSize: 32,
          },

          p: {
            fontSize: 12,
            maxWidth: "70%",
          },
        },
        ".category-image": {
          filter: "grayscale(100%)",
          position: "absolute",
          right: 0,
          bottom: -1,
          "&:hover": {
            filter: "none",
          },
        },

        ".priceRange": {
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "#F7F7FC",
          borderRadius: "25px",
          padding: "8px 0px 8px 20px",
          marginTop: "24px",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },

    MuiRating: {
      defaultProps: {
        emptyIcon: <StarIcon />,
        icon: <StarIcon />,
      },

      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            opacity: 0.48,
          },
        },
        iconEmpty: { color: "#D9DBE9" },
        sizeSmall: { '& svg': { ...ICON_SMALL } },
        sizeLarge: { '& svg': { ...ICON_LARGE } },
      },
    },

    MuiMenuItem: {
      defaultProps: {
        icon: <MenuIcon />,
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          position: "relative",
          boxShadow: "0px 12px 24px -4px rgba(110, 113, 145, 0.12)",
          borderRadius: "16px",
          zIndex: 0, // Fix Safari overflow: hidden with border radius
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          color: "#ffffff",
          fontSize: 15,
          fontWeight: "bold",
          textTransform: "none",
          padding: "20px 32px",
          boxShadow: "0px 8px 16px rgba(26, 163, 233, 0.24)",
          "&:hover": {
            boxShadow: "none",
          },
        },
        outlined: ({ theme }) => ({
          color: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
          boxShadow: "none",
        }),

        chevron: ({ theme }) => ({
          borderColor: "none",
          boxShadow: "none",
          "&:hover": {
            color: "#1AA3E9",
          },
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 48,
          color: "#14142B",
        },
        h2: {
          fontSize: 32,
          color: "#14142B",
          fontWeight: "bold",
        },
        h3: {
          fontSize: 18,
          color: "#14142B",
          fontWeight: "600",
        },
        label: {
          fontSize: 15,
          color: "#6E7191",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingBottom: 32,
          height: 120,
          paddingTop: 32,
          backgroundColor: "#ffffff",
          position: "sticky",
          top: 0,
          zIndex: 20,
          color: theme.palette.primary.main,
          boxShadow: "0px 12px 24px -4px rgba(110, 113, 145, 0.12)",
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          textDecoration: "none",
          color: "#14142B",
          "&:hover": {
            cursor: "pointer",
            color: "#1AA3E9",
            textDecoration: "underline",
          },
        }),
      },
    },
  },
  MuiCheckbox: {
    defaultProps: {
      icon: <CheckboxIcon />,
      checkedIcon: <CheckboxCheckedIcon />,
      indeterminateIcon: <CheckboxIndeterminateIcon />,
    },

    styleOverrides: {
      root: {
        padding: "2",
        '&.Mui-checked.Mui-disabled, &.Mui-disabled': {
          color: "gray",
        },
        '& .MuiSvgIcon-fontSizeMedium': {
          width: 24,
          height: 24,
        },
        '& .MuiSvgIcon-fontSizeSmall': {
          width: 20,
          height: 20,
        },
        svg: {
          fontSize: 24,
          '&[font-size=small]': {
            fontSize: 20,
          },
        },
      },
    },
  },

  MuiAlert: {
    defaultProps: {
      iconMapping: {
        info: <InfoIcon />,
        success: <SuccessIcon />,
        warning: <WarningIcon />,
        error: <ErrorIcon />,
      },
    },

    styleOverrides: {
        '& .MuiAlert-message': {
          marginBottom: "2px",
        },
      action: {
        '& button:not(:first-of-type)': {
          marginLeft: "2px",
        },
      },
    },
  }
});
