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
                <div className="textWrap">
                  <p className="textje">
                    Handen en nagels zeggen veel over een mens. <br></br>
                    Vooral vrouwen vinden hun nagels belangrijk. Ze vijlen ze.
                    Ze lakken ze. Veerle van Overloop heeft een praktijk
                    "Fabulous V" in Waasmunster. "Fabulous V" staat voor
                    elegantie, stijl en passie. Veerle volt al jaren de trends
                    op omtrent nagels, zelf draagt ze al jaren gelnagels. Bij
                    "Fabulous V" kunt u terecht voor een manicure, gellak,
                    gelnagels en gewoon lakken.
                  </p>
                  <T
                    style={{
                      fontFamily: 'Playfair Display',
                      paddingTop: '5rem',
                      paddingBottom: '0rem',
                    }}
                    translationKey="slogan"
                  ></T>
                </div>
                <span className="contact">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/befabulousv"
                  >
                    <img src="icon-instagram.svg" alt="instagram icon" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/BeFabulousV"
                  >
                    <img src="icon-facebook.svg" alt="facebook icon" />
                  </a>
                  <div>Veerle Van Overloop</div>
                  <div>Vinkenlaan 26</div>
                  <div className="pb2">9250 Waasmunster</div>
                  <div>
                    <a className="emailLink" href="tel:+32473712911">
                      0473/71 29 11
                    </a>
                  </div>
                  <div>
                    <a className="emailLink" href="mailto:veerle@fabulousv.be">
                      veerle@fabulousv.be
                    </a>
                  </div>
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
    a {
      display: inline;
      margin-right: 1rem;
      img {
        height: 30px;
        opacity: 0.8;
      }
    }

    .emailLink {
      color: inherit;
      text-decoration: none;
    }
  }
  .main {
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 820px) {
    .main {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .contact {
      margin-top: 4rem;
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
