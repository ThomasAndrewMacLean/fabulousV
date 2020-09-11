import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import { T, Image, Layout, SEO } from '../components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';
import { TranslationsType, ImagesType, SEOType } from '../types';

const IndexPage = ({ translations, pics, seo }: IndexPageProps) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <Layout page="home">
            <Main>
              <SEO seo={seo}></SEO>
              <div className="main">
                <T translationKey="productenLijst"></T>
                <T translationKey="address"></T>
              </div>
            </Main>
          </Layout>
        </TranslationContext.Provider>
      </SEOContext.Provider>
    </PictureContext.Provider>
  );
};

const Main = styled.main`
  background: var(--background-dark);
  ul {
    list-style: none;
    margin-left: 0;
  }

  .main {
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 600px) {
    .main {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

export const getStaticProps = async () => {
  const data = await getDataFromAirtable();
  return {
    props: {
      translations: data.translations.filter((x) => x.id),
      pics: data.pics.filter((x) => x.id),
      seo: data.seo.filter((x) => x.id),
    },
  };
};

type IndexPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
};

export default IndexPage;
