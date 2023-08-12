import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='portfoliocontainer' style={{backgroundColor: '#F5EBE0'}}>
      <Header />
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

