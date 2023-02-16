import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/Homescreen";
import Productscreen from './screens/Productscreen'

const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3"> 
        <Container>
          <h1>Welcome to Proshop.</h1>
          <Routes>
            <Route path="/" element={<Homescreen/>}/>
            <Route path="/product/:id" element={<Productscreen/>}/>
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
