export const COLORS = {
  white: "hsl(0deg 0% 100%)",
  black: "hsl(0deg, 0%, 0%)",
  gray: {
    50: "hsl(210deg, 19%, 10%)",
    100: "hsl(210deg, 15%, 20%)",
    200: "hsl(210deg, 15%, 25%)",
    300: "hsl(210deg, 10%, 40%)",
    400: "hsl(210deg, 9%, 45%)",
    500: "hsl(210deg, 8%, 50%)",
    600: "hsl(210deg, 12%, 55%)",
    700: "hsl(210deg, 14%, 66%)",
    800: "hsl(210deg, 20%, 77%)",
    900: "hsl(210deg, 25%, 88%)",
    1000: "hsl(210deg, 25%, 96%)",
  },
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
