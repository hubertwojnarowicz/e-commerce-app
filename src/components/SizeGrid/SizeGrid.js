import React, { useState } from "react";
import styled from "styled-components/macro";
import { COLORS } from "../../variables";
const menSizes = [
  6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15,
];
const womenSizes = [
  5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
];
const kidsSizes = [
  "10.5C",
  "11C",
  "11.5C",
  "12C",
  "12.5C",
  "13C",
  "13.5C",
  "1Y",
  "1.5Y",
  "2Y",
  "2.5Y",
  "3Y",
];

function SizeGrid({ forWho }) {
  const [checked, setChecked] = useState("isChecked");

  const getCheckedBox = (e) => {
    setChecked(e.target.value);
  };
  if (forWho === "Men")
    return (
      <GridWrapper style={{ gridTemplateRows: "48px 48px 48px 48px" }}>
        {menSizes.map((size) => {
          return (
            <OneCube onClick={(e) => console.log(e.target)}>
              <RadioInput
                type="radio"
                value={size}
                name="size"
                id={size}
                onChange={getCheckedBox}
              />
              <ShoeLabel htmlFor={size}>{size}</ShoeLabel>
            </OneCube>
          );
        })}
      </GridWrapper>
    );

  if (forWho === "Women")
    return (
      <GridWrapper style={{ gridTemplateRows: "48px 48px 48px" }}>
        {womenSizes.map((size) => {
          return (
            <OneCube onClick={(e) => console.log(e.target)}>
              <RadioInput
                type="radio"
                value={size}
                name="size"
                id={size}
                onChange={getCheckedBox}
                checked={checked === "isChecked"}
              />
              <ShoeLabel htmlFor={size}>{size}</ShoeLabel>
            </OneCube>
          );
        })}
      </GridWrapper>
    );
  return (
    <GridWrapper style={{ gridTemplateRows: "48px 48px 48px" }}>
      {kidsSizes.map((size) => {
        return (
          <OneCube onClick={(e) => console.log(e.target)}>
            <RadioInput
              type="radio"
              value={size}
              name="size"
              id={size}
              onChange={getCheckedBox}
              checked={checked === "isChecked"}
            />
            <ShoeLabel htmlFor={size}>{size}</ShoeLabel>
          </OneCube>
        );
      })}
    </GridWrapper>
  );
}

export default SizeGrid;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 70px);
  gap: 8px;
`;

const OneCube = styled.div`
  position: relative;
`;

const RadioInput = styled.input`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  border: 1px solid ${COLORS.gray[800]};
  padding: 0;
  margin: 0;
  cursor: pointer;

  &:hover {
    border-color: ${COLORS.black};
  }

  &:checked {
    border: 1px solid ${COLORS.black};
  }
`;

const ShoeLabel = styled.label`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  z-index: -10;
`;
