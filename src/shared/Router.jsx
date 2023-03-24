import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../page/Main";
import MainDetail from "../page/MainDetail";
import House from '../page/House';
import HouseWrite from '../page/HouseWrite';
import HouseDetail from '../page/HouseDetail';
import Singin from '../page/Singin';
import Signup from '../page/Signup';
import Error from '../page/Error'
import Scrap from "../page/Scrap"
import Header from "../components/Header";
import Footer from "../components/Footer";


const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/detail/:id" element={<MainDetail />} />
                <Route path="/house" element={<House />} />
                <Route path="/house/write" element={<HouseWrite />} />
                <Route path="/houst/:id" element={<HouseDetail />} />
                <Route path="/signin" element={<Singin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/scrap" element={<Scrap />} />
                <Route path="/error" element={<Error />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router;