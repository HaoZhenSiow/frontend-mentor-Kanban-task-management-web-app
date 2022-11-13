import { createGlobalStyle } from "styled-components";

const DarkMode = createGlobalStyle`
  @media (prefers-color-scheme: dark) {
    body {
        background-color: var(--very-dark-grey);
    }
  }
`

export default DarkMode;