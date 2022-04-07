// import original module declarations
import 'styled-components'

// extend them
// handle global style props that need to be consistent/accessible throughout the app
// build globals in themes.ts and apply them to children via <ThemeProvider theme={"myThemeComponent"}></"">
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      primary: string
      secondary: string
      tertiary: string
    }
  }
}
