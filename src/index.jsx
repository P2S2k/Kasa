import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./utils/style/accueil.css"
import Home from "./pages/Accueil/index"
import Apropos from "./pages/Apropos/index"
import Error from "./pages/Error/index"
import Appart from "./pages/Appart/index"
import Header from "./components/Header"
import Footer from "./components/Footer"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Router>
            <div className="leaf">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Apropos" element={<Apropos />} />
                <Route path="/Appart/:id" element={<Appart />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
            </div>
        </Router>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals()
