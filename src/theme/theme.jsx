import { extendTheme } from '@chakra-ui/react';
import { inputStyles } from "./components/input";
import { buttonStyles } from "./components/button";

const theme = extendTheme(
  inputStyles,
  buttonStyles,
  {
  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
});

export default theme;
