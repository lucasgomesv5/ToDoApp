import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      secondary: string,
      background: string,
      backgroundCard: string,
      text: string,

      white: string,
      gray: string,
      red: string,
      green: string,
    };
  }
}