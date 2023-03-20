import React, { useRef } from "react"
import {
  Container,
  PdfEditorContainer,
} from "../../styles/pdfeditor/PdfEditor-styled"
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor"

const Editor = () => {

    const toolbarSettings =
        ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'
        ]

    const editorRef = useRef(null)

    return (
        <Container>
            <PdfEditorContainer>
                <RichTextEditorComponent
                    ref={editorRef}
                    height='100%'
                    width='100%'
                    toolbarSettings={toolbarSettings}
                >
                    <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
                </RichTextEditorComponent >
            </PdfEditorContainer>
        </Container>
    )
}

export default Editor