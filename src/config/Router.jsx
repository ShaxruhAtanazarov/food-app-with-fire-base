import React from "react";
import { Route, Routes } from "react-router-dom";

// coomponents
import { Layout } from "components/Layout";

// pages
import { Home } from "pages/Home";
import { CreateItem } from "pages/CreateItem";
import { Menu } from "pages/Menu";
import { AboutUs } from "pages/AboutUs";
import { Service } from "pages/Service";

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/create-item" element={<CreateItem />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Layout>
  );
};

export default Router;
