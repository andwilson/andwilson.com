import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import styled from "styled-components";

const HeroWrapper = styled.div`
  position: relative;
  height: 100vh;
  z-index: 1;
`;

const HeroContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 960px;
  z-index: 2;
`;

const Title = styled(Link)`
  font-size: 50pt;
  @media (min-width: 600px) {
    font-size: 85pt;
  }
  @media (min-width: 850px) {
    font-size: 100pt;
  }
  text-decoration: none;
  font-weight: bold;
  > :first-child {
    color: #47878e;
  }
  > :last-child {
    color: #4b372f;
  }
  transition: all 1s;
  :hover {
    opacity: 0.8;
  }
  > span {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  }
`;

export default ({ data }) => (
  <HeroWrapper>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
    <HeroContainer>
      <Title to="/about">
        <span>&</span>
        <span>Wilson</span>
      </Title>
    </HeroContainer>
    <Img
      style={{
        minHeight: "100%",
        minWidth: "1024px",
        width: "100%",
        height: "auto",
        position: "fixed",
        top: 0,
        right: 0,
        opacity: 1
      }}
      sizes={data.background.sizes}
    />
  </HeroWrapper>
);

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: { regex: "/paint-squares.jpg/" }) {
      sizes(maxWidth: 1240, grayscale: false) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
