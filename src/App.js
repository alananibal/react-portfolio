import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <ContactForm />;
    }
    return <Project />;
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div class="d-flex flex-column min-vh-100">
      <Header><Nav currentPage={currentPage} handlePageChange={handlePageChange} /></Header>
     
      {renderPage()}
      <Footer/>
    </div>
  );
}

export default App;
