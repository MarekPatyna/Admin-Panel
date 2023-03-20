import React, { useRef } from "react"
import {
  Container,
  PdfEditorContainer,
} from "../../styles/pdfeditor/PdfEditor-styled"
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Annotation,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Inject,
} from "@syncfusion/ej2-react-pdfviewer"

const PdfViewer = () => {

    const gridRef = useRef(null)

    return (
        <Container>
            <PdfEditorContainer>
                <PdfViewerComponent
                    documentPath="PDF_Succinctly.pdf"
                    enableToolbar={true}
                    serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
                    ref={gridRef}
                    enablePrint={true}
                    toolbarSettings={{
                        showTooltip: true,
                        toolbarItems: ['OpenOption', 'UndoRedoTool', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool'],
                    }}
                    height="100%"
                >
                    <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
                        ThumbnailView, Print, Annotation, TextSelection, TextSearch]}/>
                </PdfViewerComponent>
            </PdfEditorContainer>
        </Container>
    )
}

export default PdfViewer