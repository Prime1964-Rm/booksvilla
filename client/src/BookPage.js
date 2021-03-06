import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import NavBarComponent from './components/NavBar/NavBar.component';
import pdf from './assets/pdfs/twilight.pdf'

// const url =  
// "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf"



export default function BookPage() {

  pdfjs.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);
  const [tempPageNumber, setTempPageNumber] = useState(1)
  // const [rangeOfPages, setRangeOfPages] = useState((numPages-pageNumber)+1)  

  let rangeOfPages = [1, 2, 3, 4, 5];
  /*To Prevent right click on screen*/
  // document.addEventListener("contextmenu", (event) => { 
  //   event.preventDefault(); 
  // }); 
  console.log(rangeOfPages)
  /*When document gets loaded successfully*/
  useEffect(() => {
    setPageNumber(pageNumber)
    setNumPages(100)
  }, [])

  useEffect(() => {
    // setRangeOfPages((numPages-pageNumber)+1)
  }, [numPages, pageNumber])

  const scrollToTop = () => {
    window.scrollTo(0, 0);
}

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
    scrollToTop()
  }

  function nextPage() {
    changePage(1);
    scrollToTop()
  }

  const onChangePageNumber = (e) => {
    setPageNumber(parseInt(e.target.value))
  }

  const onChangeNumberOfPages = (e) => {
    setNumPages(parseInt(e.target.value))
  }



  return (
    <>
      <NavBarComponent />
      <div className="main">
        <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '100px' }}>
          <Document
            file={pdf}

          >
            <Page pageNumber={pageNumber}
              
            />

          </Document>
        </div>

        <div>
          <div className="pagec">
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </div>
          <div className="buttonc">
	                        <button
	                            type="button"
	                            disabled={pageNumber <= 1}
	                            onClick={previousPage}
	                            className="Pre"

	                        >
	                            Previous
	                        </button>
	                        <button
	                            type="button"
	                            disabled={pageNumber >= numPages}
	                            onClick={nextPage}

	                        >
	                            Next
	                        </button>
	                    </div>
        </div>
      </div>
    </>
  );
}