/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
// import Content from "../components/styles/Content.styled";

const StyledLanding = styled.div`
  grid-column: 3 / 13;
  position: relative;
  width: 100%;
  height: 100vh;
  transition: 2s;
  // 태블릿
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-column: 2 / 14;
    transition: 2s;
  }
  // 모바일
  @media screen and (max-width: 767px) {
    grid-column: 1 / 15;
    transition: 2s;
  }
`;
const LandingImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  position: absolute;
`;
const LandingTitle = styled.h1`
  position: absolute;
  background-color: rgb(236, 236, 236);
  border: 5px solid rgb(236, 236, 236);
  top: 22%;
  color: black;
  font-size: 3rem;
  padding: 15px;
  // 태블릿
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    transition: 1.5s;
    font-size: 2rem;
  }
  // 모바일
  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
    transition: 1.5s;
  }
`;

const Landing = ({ imageSrc }) => {
  return (
    <StyledLanding>
      <LandingImage src={imageSrc} />
      <LandingTitle>해피데빙으로 협업하자</LandingTitle>
    </StyledLanding>
  );
};

export default Landing;
