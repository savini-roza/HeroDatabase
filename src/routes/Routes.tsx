import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "../pages/Categories";
import Heroes from "../pages/Heroes";
import Index from "../pages/Index";
import AddEditCategory from "../pages/AddEditCategory";
import AddEditHero from "../pages/AddEditHero";

function Rotas() {
    return (
        <>

            <Routes>
                <Route element={<Index />} path="/" />
                <Route element={<Categories />} path="/categorias" />
                <Route element={<Heroes />} path="/herois" />
                <Route element={<AddEditCategory/>} path="/novaCategoria" />
                <Route element={<AddEditHero />} path="/novoHeroi"/> 
            </Routes>
        </>
    )
}

export default Rotas;