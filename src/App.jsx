import * as React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Home, Quis } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quis" element={<Quis />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;