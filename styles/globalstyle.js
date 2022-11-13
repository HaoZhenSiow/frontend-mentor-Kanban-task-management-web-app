import { createGlobalStyle } from "styled-components";
import fluid from "../components/utils/fluid";


const GlobalStyle = createGlobalStyle`
/* root font size must be fixed */
/* scale 1.067, 14px, 320px viewport and 1.2 18px, 1920px viewport */
/* viewport - viewport, fluid-container-padding - fluid container horizontal padding */
:root {
  --fluid-lg: clamp(1.2101247690rem, calc(0.8922777225rem + 1.58923523100vw), 2.79936rem);
  --fluid-h1: clamp(1.1341375530rem, calc(0.8944050633rem + 1.19866244700vw), 2.33280rem);
  --fluid-h2: clamp(1.0629217930rem, calc(0.8867061512rem + 0.88107820740vw), 1.94400rem);
  --fluid-h3: clamp(0.9961778750rem, calc(0.8714134500rem + 0.62382212500vw), 1.62000rem);
  --fluid-h4: clamp(0.9336250000rem, calc(0.8503500000rem + 0.41637500000vw), 1.35000rem);
  --fluid-h5: clamp(0.8750000000rem, calc(0.8250000000rem + 0.25000000000vw), 1.12500rem);
  --fluid-h6: clamp(0.8200562324rem, calc(0.7965674789rem + 0.11744376760vw), 0.93750rem);
  --fluid-sm: clamp(0.7685625421rem, calc(0.7660250505rem + 0.01268745789vw), 0.78125rem);
  --fluid-line-height: calc(1.8em - .4 * ((100vw - 29.08324552em) / (77.58342115)));

  --purple: #635FC7;
  --purple-hover: #A8A4FF;
  --red: #EA5555;
  --red-hover: #FF9898;
  --white: #ffffff;
  --black: #000112;
  --very-dark-grey: #20212C;
  --dark-grey: #2B2C37;
  --dark-line: #3E3F4E;
  --medium-grey: #828FA3;
  --light-line: #E4EBFA;
  --light-grey: #F4F7FD;

  --heading-l-fs: 18px;
  --heading-l-lh: 23px;
  --heading-m-fs: 15px;
  --heading-m-lh: 19px;

  --header-padding-inline: ${fluid.container(16, 24, 16)};
  --header-height: ${fluid.calc(64, 81, 's', 'px')}
  --header-bg: var(--white)
}

/* to prevent font-size looping use :not()*/
*:not(html, small, blockquote *)  {
  font-size: var(--fluid-h5);
}
h1 { font-size: var(--heading-l-fs); line-height: var(--heading-l-lh); }
h2 {font-size: var(--fluid-h2);}
h3 {font-size: var(--fluid-h3);}
h4 {font-size: var(--fluid-h4);} 
/* h5 is alread set to var(--heading-5)*/
h6 {font-size: var(--fluid-h6);} 
p {line-height: var(--fluid-line-height);}

@media (max-width: 414px){
p {line-height: 1.8em;} 
}

@media (min-width: 1920px){
p {line-height: 1.4em;} 
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
        --header-bg: var(--dark-grey)
    }
    body {
        background-color: var(--very-dark-grey);
    }
}

@media (min-width: 768px) {
    :root {
        --header-height: ${fluid.calc(81, 97, 'b', 'px')}
    }
}
`;

export default GlobalStyle;