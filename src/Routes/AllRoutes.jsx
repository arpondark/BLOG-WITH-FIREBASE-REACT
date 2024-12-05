import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home";
import CreatePost from "./../Pages/CreatePost";
import PageNotFound from "./../Pages/PageNotFound";
import Protected from "./Protected";
const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={ <Protected> <CreatePost /> </Protected> } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default AllRoutes;
