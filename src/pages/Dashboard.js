import React from "react";
import SuperHeader from "../components/SuperHeader";
import Header from "../components/Header/Header";
import HeadlineSection from "../components/HeadlineSection";
import GallerySection from "../components/GallerySection";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
function Dashboard() {
  return (
    <>
      <SuperHeader />
      <Header />
      <HeadlineSection />
      <GallerySection />
      <Slider />
      <Footer />
    </>
  );
}

export default Dashboard;
