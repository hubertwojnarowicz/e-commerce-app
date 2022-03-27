import React from 'react';
import { useParams } from 'react-router-dom';
import { AllShoes } from '../data/data';
import styled from 'styled-components/macro';
import SuperHeader from '../components/SuperHeader';
import Header from '../components/Header/Header';

function Shoes() {
  const { index } = useParams();
  const numIndex = parseInt(index);
  const findCorrespondingShoe = AllShoes.filter(
    (shoe) => shoe.index === numIndex
  );

  return (
    <>
      <SuperHeader />
      <Header />
      <MaxWidthWrapper>
        {findCorrespondingShoe.map((shoe) => {
          return <img src={shoe.imgSrc} />;
        })}
      </MaxWidthWrapper>
    </>
  );
}

export default Shoes;

const MaxWidthWrapper = styled.main``;

const ShoeWrapper = styled.div``;
