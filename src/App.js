import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import './App.css'


function App() {
  return (
    <div className="container">
       <div className="header">
          <Header/>
       </div>
      
       <div className="menu">
         <Menu />
       </div>
       <div className="footer">
         <Footer />
       </div>
       
          

           

    </div>
  )
}

export default App
