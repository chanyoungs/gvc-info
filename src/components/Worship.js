import React from "react";
import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { SizeMe } from "react-sizeme";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Worship = () => {
    const [numPages, setNumPages] = useState();
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    return (
        <SizeMe
            monitorHeight
            refreshRate={128}
            refreshMode={"debounce"}
            render={({ size }) => (
                <Document
                    file="https://raw.githubusercontent.com/chanyoungs/gvc-worship/main/Worship.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {Array.apply(null, Array(numPages)).map(
                        (x, pageZeroIndex) => (
                            <Page
                                style={{ margin: 10 }}
                                key={pageZeroIndex}
                                pageNumber={pageZeroIndex + 1}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                                width={size.width}
                            />
                        )
                    )}
                </Document>
            )}
        />
    );
};
