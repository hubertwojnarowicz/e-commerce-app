import React from "react";
import SuperHeader from "../components/SuperHeader";
import Header from "../components/Header/Header";
import HeadlineSection from "../components/HeadlineSection";
import GallerySection from "../components/GallerySection";
import styled from "styled-components/macro";

function Dashboard() {
  return (
    <>
      <SuperHeader />
      <Header />
      <HeadlineSection />
      <GallerySection />
    </>
  );
}

export default Dashboard;
