import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import { T, Layout, SEO } from '../components';

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
                <T
                  style={{
                    fontFamily: 'Playfair Display',
                    paddingTop: '3rem',
                    paddingBottom: '3rem',
                  }}
                  translationKey="slogan"
                ></T>
                <span className="contact">
                  <div>Veerle Van Overloop</div>
                  <div>Vinkenlaan 26</div>
                  <div className="pb2">9250 Waasmunster</div>
                  <div>0473/71 29 11</div>
                  <div>veerle@fabulousv.be</div>
                </span>
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
  strong {
    color: var(--colour2);
    font-style: italic;
  }

  .contact {
    line-height: 1.5rem;
    .pb2 {
      padding-bottom: 1rem;
    }
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
