import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Florence from "./pages/Florence";
import Italy from "./pages/Italy";
import Euro from "./pages/Euro";
import FAQ from "./pages/FAQ";
import NoPage from "./pages/NoPage";
import './index.css';

export default function App () {
  return (
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
      <Routes>
        <Route path = "/" element={<Layout />}>
          <Route index element = {<Home />} />
          <Route path = "Florence" element = {<Florence />} />
          <Route path = "Italy" element = {<Italy />} />
          <Route path = "Euro" element = {<Euro />} />
          <Route path = "FAQ" element = {<FAQ />} />
          <Route path = "*" element = {<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root')); //root in index.html
root.render(
    <App />
);

