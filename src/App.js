import { Capitals } from "./features/capitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { City, Home, Search, NotFound, Location } from "./pages";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/city" element={<City />} />
          <Route path="/capitals" element={<Capitals />} />
          <Route path="/location" element={<Location />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
