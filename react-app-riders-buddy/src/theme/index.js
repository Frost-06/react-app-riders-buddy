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

const ICON_SMALL = { width: 16, height: 16 };
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
          background: "url(/img/banner-bg.png) no-repeat left center",
          backgroundSize: "cover",
          height: "calc( 100vh - 96px )",
          display: "flex!important",
          alignItems: "center",
          maxWidth: "1920px!important",
        },
        ".banner-2": {
          background: "url(/img/banner-bg-2.png) no-repeat left center",
          backgroundSize: "cover",
          height: "calc( 100vh - 96px )",
          display: "flex!important",
          alignItems: "center",
          maxWidth: "1920px!important",
        },
        ".banner-3": {
          background: "url(/img/banner-bg-3.png) no-repeat left center",
          backgroundSize: "cover",
          height: "calc( 100vh - 96px )",
          display: "flex!important",
          alignItems: "center",
          maxWidth: "1920px!important",
        },

        ".sign-in-banner": {
          background: "url(/img/sign-in-img.png) no-repeat left center",
          backgroundSize: "contain, cover",
          height: "100vh",
          width: 960,
          maxWidth: 1075,
          alignItems: "left",
        },

        ".sign-up-banner": {
          background: "url(/img/sign-up-img.png) no-repeat left center",
          backgroundSize: "contain, cover",
          height: "100vh",
          width: 960,
          maxWidth: 1075,
          alignItems: "left",
        },

        ".MuiMobileStepper-dots": {
          flex: "1 100%",
          display: "flex",
          justifyContent: "center",
        },
        ".searchbox": {
          width: "calc(100% - 148px)",
          height: 64,
          
          "& > div": {
            height: "100%",
            borderRadius: 16,
            marginRight: "8px",
            "&:not(.noshadow)": {
              boxShadow: "0px 12px 24px -4px rgba(110, 113, 145, 0.12)",
              "&:hover": {
                border: "1px solid #A0A3BD",
                transition: ".2s ease-out"
              },
            },
            border: "#D9DBE9",
            backgroundColor: "#ffffff",
          },
        },

        ".textinputbox": {
          width: "100%",
          height: 64,
          
          "& > div": {
            height: "100%",
            borderRadius: 16,
            "&:not(.noshadow)": {
              boxShadow: "none",
              border: "1px solid #D9DBE9",
              "&:hover": {
                border: "1px solid #A0A3BD",
                transition: ".2s ease-out"
              },
            },
            border: "#D9DBE9",
            backgroundColor: "#FCFCFC",
          },
        },

        ".category-card": {
          position: "relative",
          backgroundColor: "#fcfcfc",
          maxWidth: 548,
          boxShadow: "0px 12px 24px -4px rgba(110, 113, 145, 0.12)",
          filter: "grayscale(100%)",
          padding: 32,
          borderBottom: "8px solid transparent",
          "&:hover": {
            cursor: "pointer",
            filter: "none",
            transition: ".2s ease-in",
            delay: "0.5s",
            h2: {
              color: "#1AA3E9",
            },
            
            h3: {
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

          h3: {
            fontWeight: 800,
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
          color: "#EAAC30"
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
          "&:hover": {
            marginTop: "-4px",
            transition: ".2s ease-out",
          },
        },
      },
    },

    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          color: "#ffffff",
          fontSize: 14,
          fontWeight: "bold",
          textTransform: "none",
          padding: "20px 32px",
          letterSpacing: "0.75px",
          boxShadow: "0px 8px 16px rgba(26, 163, 233, 0.24)",
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeSmall: {
          height: 48,
        },

        sizeMedium: {
          height: 56,
        },

        sizeLarge: {
          height: 64,
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
          lineHeight: "80px",
          fontSize: 56,
          letterSpacing: "1px",
        },
        h2: {
          lineHeight: "54px",
          fontSize: 48,
          letterSpacing: "1px",
        },
        h3: {
          lineHeight: "48px",
          fontSize: 32,
          letterSpacing: "1px",
        },
        h4: {
          fontWeight: 700,
          lineHeight: "36px",
          fontSize: 24,
          letterSpacing: "1px",
        },
        h5: {
          fontWeight: 700,
          lineHeight: "32px",
          fontSize: 20,
          letterSpacing: "0.75px",
        },
        h6: {
          fontWeight: 700,
          lineHeight: "32px",
          fontSize: 18,
          letterSpacing: "0.75px",
        },
        subtitle1: {
          fontWeight: 500,
          lineHeight: "24px",
          fontSize: 16,
          letterSpacing: "0.75px",
        },
        subtitle2: {
          fontWeight: 600,
          lineHeight: "22px",
          fontSize: 14,
          letterSpacing: "0.75px",
        },
        body1: {
          lineHeight: "24px",
          fontSize: 16,
          letterSpacing: "0.75px",
        },
        body2: {
          lineHeight: "22px",
          fontSize: 14,
          letterSpacing: "0.75px",
        },
        caption: {
          lineHeight: "22px",
          fontSize: 12,
          letterSpacing: "0.25px",
        },
        overline: {
          lineHeight: "22px",
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: "0.25px",
        },
        button: {
          fontWeight: 800,
          lineHeight: "26px",
          fontSize: 15,
          letterSpacing: "0.75px",
          textTransform: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: 96,
          justifyContent: "space-evenly",
          gap: 5,
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
          paddingLeft: "16px",
          "& .MuiOutlinedInput-notchedOutline":
            {
              border: "none",
              color: "#FCFCFC",
            },
        },
      },
    },
  }, //end of component
});
