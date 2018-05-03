import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";

const Wrapper = styled.div`
  width: 300px;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding-bottom: 7px;
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(189,189,189,1);
  > h1 {
    font-size: 18px;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
`;

const SLink = styled(Link)`
  font-family: open sans;
  text-decoration: none;
  color: black;
  font-size: 16px;
  transition: all 0.2s ease;
  &:hover {
    color: #28aa55;
  }
`;

export default ({ data }) => (
  <Wrapper>
    <TitleBar>
      <Img
        style={{
          width: "25px"
        }}
        sizes={data.boy.sizes}
      />
      <h1>Josh Meets Computer</h1>
      <Img
        style={{
          width: "50px"
        }}
        sizes={data.computer.sizes}
      />
    </TitleBar>
    <NavBar>
      <SLink to={"/projects/"}>Projects</SLink>
      <SLink to={"/notes/"}>Notes</SLink>
      <SLink to={"/letters/"}>Letters</SLink>
      <SLink to={"/about/"}>About</SLink>
    </NavBar>
  </Wrapper>
);
