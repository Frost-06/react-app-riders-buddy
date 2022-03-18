import { createTheme } from "@mui/material/styles";
import EudoxusSans from "../fonts/EudoxusSans-Medium.ttf";
import {
  StarIcon,
  MenuIcon,
  CheckboxIcon,
  CheckboxCheckedIcon,
  CheckboxIndeterminateIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  ErrorIcon,
} from "./CustomIcons";

const eudoxusSans = {
  fontFamily: "Eudoxus Sans",
  fontStyle: "medium",
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
      lighter: "#E5F3F9",
      light: "#D1EDFB",
      main: "#1AA3E9",
      dark: "#0D5275",
      darker: "#76C8F2",
    },
    secondary: {
      lighter: "#E5F3F9",
      light: "#E2EBF2",
      main: "#003459",
      dark: "#001A2D",
      darker: "#66859B",
    },
    info: {
      lighter: "#E5F3F9",
      light: "#D1EDFB",
      main: "#1AA3E9",
      dark: "#0D5275",
      darker: "#76C8F2",
    },
    success: {
      lighter: "#EAF9DE",
      light: "#CBFFAE",
      main: "#008A00",
      dark: "#067306",
      darker: "#A6F787",
    },
    warning: {
      lighter: "#FFF8E9",
      light: "#FFE6B0",
      main: "#EAAC30",
      dark: "#946300",
      darker: "#FFDF9A",
    },
    error: {
      lighter: "#FFF2F1",
      light: "#FFC3C0",
      main: "#E61B00",
      dark: "#AB1400",
      darker: "#FD6150",
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
              boxShadow: "0px 16px 32px -4px rgba(110, 113, 145, 0.12);",
            },
            marginRight: 19,
            borderColor: "#D9DBE9",
            backgroundColor: "#ffffff",
          },
        },
        ".category-card": {
          position: "relative",
          width: 502,
          minHeight: 162,
          backgroundColor: "#fcfcfc",
          boxShadow: "0px 12px 24px -4px rgba(110, 113, 145, 0.12)",
          filter: "grayscale(100%)",
          padding: 32,
          borderBottom: "8px solid transparent",
          "&:hover": {
            cursor: "pointer",
            filter: "none",

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
          position: "absolute",
          right: 0,
          bottom: -1,
          marginBottom: -7,
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
        sizeSmall: { "& svg": { ...ICON_SMALL } },
        sizeLarge: { "& svg": { ...ICON_LARGE } },
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
            color: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 48,
          color: "#14142B",
          letterSpacing: "1px",
        },
        h2: {
          fontSize: 32,
          color: "#14142B",
          fontWeight: "bold",
          letterSpacing: "1px",
        },
        h3: {
          fontSize: 18,
          color: "#14142B",
          fontWeight: "400",
          letterSpacing: "1px",
        },
        h4: {
          fontSize: 24,
          color: "#14142B",
          fontWeight: "400",
          letterSpacing: "1px",
        },
        h5: {
          fontSize: 20,
          color: "#14142B",
          fontWeight: "700",
          letterSpacing: "0.75px",
          lineHeight: "32px",
        },
        label: {
          fontSize: 15,
          color: "#6E7191",
          letterSpacing: "0.75px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: 120,
          paddingTop: 25,
          backgroundColor: "transparent",
          position: "inherit",
          top: 0,
          zIndex: 99,
          boxShadow: "0px 12px 24px -4px rgba(110, 113, 145, 0.12)",
          backdropFilter: "blur(50px)",
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

    MuiCheckbox: {
      defaultProps: {
        icon: <CheckboxIcon />,
        checkedIcon: <CheckboxCheckedIcon />,
        indeterminateIcon: <CheckboxIndeterminateIcon />,
      },

      styleOverrides: {
        root: {
          padding: "2",
          "&.Mui-checked.Mui-disabled, &.Mui-disabled": {
            color: "gray",
          },
          "& .MuiSvgIcon-fontSizeMedium": {
            width: 24,
            height: 24,
          },
          "& .MuiSvgIcon-fontSizeSmall": {
            width: 20,
            height: 20,
          },
          svg: {
            fontSize: 24,
            "&[font-size=small]": {
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
        "& .MuiAlert-message": {
          marginBottom: "2px",
        },
        action: {
          "& button:not(:first-of-type)": {
            marginLeft: "2px",
          },
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          width: 20,
          height: 20,
          fontSize: "inherit",
        },
        fontSizeLarge: {
          width: 32,
          height: 32,
          fontSize: "inherit",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          fontWeight: 500,
          "& .MuiOutlinedInput-root. Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "orange !important",
            },
        },
      },
    },
  }, //end of component
});
