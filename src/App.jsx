import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Personen from "./pages/Personen";

function App() {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/personen" element={<Personen />} />
                </Routes>
            </main>
            <Footer />
            </div>
        </Router>
    );
}

export default App;
