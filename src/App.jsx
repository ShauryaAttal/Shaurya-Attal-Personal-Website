import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Accomplishments from './pages/Accomplishments';
import Mission from './pages/Mission';
import Strengths from './pages/Strengths';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout currentPageName="Home">
              <Home />
            </Layout>
          }
        />
        <Route
          path="/resume"
          element={
            <Layout currentPageName="Resume">
              <Resume />
            </Layout>
          }
        />
        <Route
          path="/accomplishments"
          element={
            <Layout currentPageName="Accomplishments">
              <Accomplishments />
            </Layout>
          }
        />
        <Route
          path="/mission"
          element={
            <Layout currentPageName="Mission">
              <Mission />
            </Layout>
          }
        />
        <Route
          path="/strengths"
          element={
            <Layout currentPageName="Strengths">
              <Strengths />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout currentPageName="Contact">
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;