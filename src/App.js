import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./Pages/Home"));
function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="loading">
            <div className="loader">
              <span></span>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
