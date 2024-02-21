import { extendTheme } from '@chakra-ui/react';
import { inputStyles } from "./components/input";
import { buttonStyles } from "./components/button";
import { CardComponent } from "./components/card";

const theme = extendTheme(
  inputStyles,
  buttonStyles,
  CardComponent,
  {
  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
});

export default theme;
