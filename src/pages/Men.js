import React from "react";
import SuperHeader from "../components/SuperHeader";
import Header from "../components/Header/Header";
import Shoe from "../components/Shoe";
import { AllShoes } from "../data/data";
import styled from "styled-components/macro";
import Footer from "../components/Footer";

function Men() {
  const getMensSoes = AllShoes.filter(({ forWho }) => {
    return forWho === "Men";
  });

  return (
    <>
      <SuperHeader />
      <Header />
      <NewReleasesWrapper>
        {getMensSoes.map((boot) => {
          return (
            <ShoeWrapper key={boot.index}>
              <Shoe {...boot} />
            </ShoeWrapper>
          );
        })}
      </NewReleasesWrapper>
      <Footer />
    </>
  );
}

export default Men;

const NewReleasesWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(375px, 100%), 1fr));
  gap: 32px;
  margin: 32px;
`;

const ShoeWrapper = styled.div`
  min-width: 275px;
`;
