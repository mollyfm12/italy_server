import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

import Home from "./pages/Home";
import Florence from "./pages/Florence";
import Florence1a from "./pages/Florence1a";
import Italy from "./pages/Italy";
import Euro from "./pages/Euro";
import Budapest from "./pages/Budapest";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="florence" element={<Florence />} />
          <Route path="florence-1a" element={<Florence1a />} />
          <Route path="italy" element={<Italy />} />
          <Route path="euro" element={<Euro />} />
          <Route path="budapest" element={<Budapest />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
