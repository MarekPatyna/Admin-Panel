import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  position: relative;
  color: #5b6e88;
`

export const PdfEditorContainer = styled.section`
  margin: 5.625rem 1.125rem 1.125rem 16.5625rem;
  width: 100%;

  .e-pdfviewer .e-pv-text-select-tool-icon::before {
    color: #006d84 !important;
  }

  .e-pdfviewer .e-pv-pan-tool-icon::before {
    color: #006d84 !important;
  }

  .e-pdfviewer .e-pv-thumbnail-view-selection-icon:before  {
    color: #006d84 !important;
  }
  .e-pdfviewer .e-pv-bookmark-selection-icon:before {
    color: #006d84 !important;
  }
  .e-list-item.e-active {
    .e-pv-bookmark-icon.e-pv-icon {
      color: #006d84 !important;
    }
    .e-pv-bookmark-title {
      color: #006d84 !important;
    }
  }
`