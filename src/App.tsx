import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "views/client/Layout";
import Shares from "views/client/shares/Shares";
import Contact from "views/client/contact/Contact";
import Home from "views/client/home/Home";
import ShareDetails from "views/client/share-details/ShareDetails";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog/:id" element={<ShareDetails />} />
          <Route path="blogs" element={<Shares title="Blog" sharesType="Blog" />} />
          <Route path="guides" element={<Shares title="Rehberler" sharesType="Rehber" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
