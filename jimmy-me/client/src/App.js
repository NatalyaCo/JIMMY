import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import LandingPage from "./pages/LandingPage/LandingPage"; 
import { BrowserRouter, Route } from "react-router-dom";
import ReminderForm from "./components/ReminderForm/ReminderForm";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage";

const App = () => {
    <>
    <Header />
    <main style={{ minHeight: "90vhv" }}>
    <MainPage />
    <Footer />
    </main> 
    </>
};


 <BrowserRouter>

<div>
    <Route path="/" component={LandingPage} exact />
    <Route path="/login" component={LoginPage} exact />
    <Route path="/register" component={RegisterPage} exact />
    <Route path="/reminders" component={() => <ReminderForm /> } /> 
    
</div>
</BrowserRouter>
 

export default App; 