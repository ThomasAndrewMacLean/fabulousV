import React, { ReactNode } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Image } from '.';

type LayoutProps = {
  children: ReactNode;
 };
const Layout = ({ children }: LayoutProps) => {
  return (
    <Main>
      <Header>
        <Image
          imageKey="logo-single-page"
          alt="fabulous V, nagelstyliste waasmunster"
          style={{ margin: 'auto', marginTop: '6rem' }}
        />
      </Header>
      {children}
      <Footer>
        <a href="mailto:veerle@fabulousv.be">contact</a>
        {/* <address>contact</address> */}
      </Footer>
    </Main>
  );
};

const Main = styled.main`
  margin: auto;
  width: 90%;
  max-width: 900px;
`;
const Header = styled.header`
  h1 {
    font-weight: 100;
  }
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;
  nav {
  }
  ul {
    flex-direction: row;
    display: flex;
    list-style: none;

    li {
      margin: 0 1rem;
    }
  }

  @media (max-width: 600px) {
    img {
      max-width: 80%;
      margin-top: 1rem !important;
    }
  }
`;


const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  margin-top: 4rem;
  /* position: absolute;
  bottom: 2rem;
  width: 100%;
  left: 0; */
  a {
    color: #333;
  }
`;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  page: PropTypes.string.isRequired,
};

export default Layout;
