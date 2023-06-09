import React, {useState} from "react";
import NavTabs from "./NavTabs";
import  Resume  from "./pages/Resume";
import  About from "./pages/About";
import  Contact  from "./pages/Contact";
import  Portfolio from "./pages/Portfolio";
import Footer from "./Footer";


 function Website() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
     if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if(currentPage === 'Contact'){
    return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="page-container">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />

    </div>
  );
};

export default Website;