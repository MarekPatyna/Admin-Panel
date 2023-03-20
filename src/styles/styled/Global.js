import { createGlobalStyle } from "styled-components"
import "../../../node_modules/@syncfusion/ej2-base/styles/material.css"
import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css"
import "../../../node_modules/@syncfusion/ej2-calendars/styles/material.css"
import "../../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css"
import "../../../node_modules/@syncfusion/ej2-inputs/styles/material.css"
import "../../../node_modules/@syncfusion/ej2-lists/styles/material.css"
import "../../../node_modules/@syncfusion/ej2-navigations/styles/material.css"
import "../../../node_modules/@syncfusion/ej2-popups/styles/material.css"
import "../../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css"
import "../../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css"
import "../../../node_modules/@syncfusion/ej2-react-documenteditor/styles/material.css"
import "../../../node_modules/@syncfusion/ej2-react-grids/styles/material.css"
import '../../../node_modules/@syncfusion/ej2-react-pivotview/styles/material.css'
import '../../../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css'
import "../../../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css"


export const GlobalStyles = createGlobalStyle`
  *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Reapply the pointer cursor for anchor tags */
  a, button {
    cursor: revert;
  }

  /* Remove list styles (bullets/numbers) */
  ol, ul, menu {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-width: 100%;
  }

  /* removes spacing between cells in tables */
  table {
    border-collapse: collapse;
  }

  /* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
  input, textarea {
    -webkit-user-select: auto;
  }

  /* revert the 'white-space' property for textarea elements on Safari */
  textarea {
    white-space: revert;
  }

  /* minimum style to allow to style meter element */
  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  /* reset default text opacity of input placeholder */
  ::placeholder {
    color: unset;
  }

  /* fix the feature of 'hidden' attribute.
     display:revert; revert to element instead of attribute */
  :where([hidden]) {
    display: none;
  }

  /* revert for bug in Chromium browsers
     - fix for the content editable attribute will work properly.
     - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/
  :where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }

  /* apply back the draggable feature - exist only in Chromium and Safari */
  :where([draggable="true"]) {
    -webkit-user-drag: element;
  }

  body {
    background: #ecf0fa;
    font-family: 'Source Sans Pro', sans-serif !important;
    font-weight: 400;
    font-size: 16px;
  }

 

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border: 0 none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border: 0 none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #ffffff;
  }
  ::-webkit-scrollbar-track:active {
    background: #ffffff;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }


  ::selection {
    background-color: #338FFF !important;
  }

  .e-float-line::after {
    background-color: #04293a !important;
  }

  .e-float-line::before {
    background-color: #04293a !important;
  }

  .e-float-text.e-label-top {
    color: rgba(0, 0, 0, 0.54) !important;
  }

  .e-btn.e-today.e-flat.e-primary {
    background-color: transparent;
    border-color: transparent;
    color: #04293a;
  }

  .e-btn.e-flat.e-primary {
    background-color: transparent;
    border-color: transparent;
    color: #04293a;
  }

  .e-btn.e-today.e-flat.e-primary:hover {
    background-color: rgba(0, 0, 0, 0.1044);
    border-color: transparent;
    color: rgba(0, 0, 0, 0.87);
    box-shadow: none;
  }

  .e-btn.e-flat.e-primary:hover {
    background-color: rgba(0, 0, 0, 0.1044);
    border-color: transparent;
    color: rgba(0, 0, 0, 0.87);
    box-shadow: none;
  }

  .e-spinner-pane .e-spinner-inner .e-spin-material {
    stroke: #04293a !important;
  }

  .e-check {
    background-color: #006d84 !important;
  }

  .e-selected .e-day {
    background: #04293a !important;
    border: 1px solid #04293a !important;
  }

  .e-content td.e-today span.e-day {
    border: 1px solid #04293a !important;
  }

  .e-date-wrapper span.e-input-group-icon.e-date-icon.e-icons.e-active {
    color: #04293a !important;
  }
`