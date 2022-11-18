import { createGlobalStyle } from "styled-components";
import fluid from "../components/utils/fluid";


const GlobalStyle = createGlobalStyle`
/* root font size must be fixed */
/* scale 1.067, 14px, 320px viewport and 1.2 18px, 1920px viewport */
/* viewport - viewport, fluid-container-padding - fluid container horizontal padding */
:root {
  --purple: #635FC7;
  --purple-hover: #A8A4FF;
  --red: #EA5555;
  --red-hover: #FF9898;
  --white: #ffffff;
  --black: #000112;
  --very-dark-grey: #20212C;
  --dark-grey: #2B2C37;
  --medium-grey: #828FA3;
  --line-color: #E4EBFA;
  --light-grey: #F4F7FD;

  --heading-l-fs: 18px;
  --heading-l-lh: 23px;
  --heading-m-fs: 15px;
  --heading-m-lh: 19px;

  --header-padding-inline: ${fluid.container(16, 24, 16)};
  --header-height: ${fluid.calc(64, 81, 's', 'px')};
  --header-bg: var(--white);
  --logo-margin-inline-end: 16px;
  --boardname-color: var(--black);
  --boardname-fs: ${fluid.calc(18, 20, 's', 'px')};
  --boardname-lh: ${fluid.calc(22.68, 25.2, 's', 'px')};

  --sidebar-width: ${fluid.calc(254, 290, 'b', 'px')};
  --allboards-mt: max(15px, ${fluid.calc(31, 15, 'b', 'px')});
  --emptyboard-mt: ${fluid.calc(0.316, 0.32, 's', 'vh')};
  
}

/* to prevent font-size looping use :not()*/
*:not(html, small, blockquote *)  {
  font-size: var(--fluid-h5);
}

* {box-sizing: border-box;}

html {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 500;
  color: var(--medium-grey);
}

body {
    margin: 0;
    padding: 0;
    background-color: var(--light-grey);
    min-width: 330px;
}

a {
    text-decoration: none;
    color: #337ab7;
}

a:hover, a:focus {text-decoration: underline;}

abbr:hover , acronym:hover { cursor: help;}

kbd {
    background-color: #333333;
    color: #ffffff;
    font-size: .9em;
    padding: 0.1em 0.2em;
    border-radius: 0.2em;
}

code {
    color: #c7254e;
    background-color: #f9f2f4;
    font-size: .9em;
    padding: 0.1em 0.2em;
    border-radius: 0.2em;
}

sub, sup {
    font-size: 75%;
}

blockquote {
    padding: 0.5em 1.5em;
    margin-left: 0;
    margin-right: 0;
    /* font-size: var(--fluid-h4); */
    border-left: 5px solid #eee;
}

blockquote > p {
    margin: 0;
}

dt {font-weight: 700;}
dd {margin-inline-start: 0;}
address {font-style: normal;}

pre {
    display: block;
    padding: 1.5em;
    /* font-size: var(--fluid-sm); */
    line-height: 1.6em;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: .3em;
}

fieldset {
    padding: 0;
    margin: 0;
    border: 0;
}

legend {
    width: 100%;
    /* font-size: var(--fluid-h3); */
    border-bottom: solid 1px #d6d6d6;
    margin-bottom: 1em;
}

label {
    font-weight: 700;
}

button:hover, input[type="button"]:hover, input[type="submit"]:hover, input[type="reset"]:hover {
    cursor: pointer;
}

@media (prefers-color-scheme: dark) {
    :root {
        --line-color: #3E3F4E;
        --header-bg: var(--dark-grey);
        --boardname-color: var(--white);
    }
    body {
        background-color: var(--very-dark-grey);
    }
}

@media (min-width: 768px) {
    :root {
        --header-height: ${fluid.calc(81, 97, 'b', 'px')};
        --logo-margin-inline-end: ${fluid.calc(81.47, 112.47, 'b', 'px')};
        --boardname-fs: ${fluid.calc(20, 24, 'm', 'px')};
        --boardname-lh: ${fluid.calc(25.2, 30.24, 'm', 'px')};
    
        --emptyboard-mt: ${fluid.calc(0.32, 0.355, 'b', 'vh')};
    }
}
`;

export default GlobalStyle;