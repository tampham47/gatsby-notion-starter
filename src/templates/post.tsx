import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import { Container } from "../components/Grid";
import { Layout } from "../components/Layout";
import {
  ScCategoryText,
  ScContent,
  ScHeaderWrapper,
  ScHeader,
  ScMain,
} from "./styled";
import { normalizeNotionFrontMatter } from "../utils/normalizeNotionBlog";
import { SEO } from "../components/SEO";

const ScRoot = styled.div`
  background-color: var(--darkmode);
`;

const ScFeature = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;

  img {
    max-width: 100%;
  }
`;

const PostTemplate = ({ pageContext: context }: any) => {
  const post = context.post;

  return (
    <Layout>
      <ScRoot>
        <Container>
          <ScMain>
            <ScHeaderWrapper>
              <ScHeader>{post.title}</ScHeader>
              <ScCategoryText>{post.date}</ScCategoryText>
            </ScHeaderWrapper>

            <ScFeature>
              <Img
                fluid={post.featuredImg.childImageSharp.fluid}
                alt={post.title}
              />
            </ScFeature>

            <ScContent>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </ScContent>
          </ScMain>
        </Container>
      </ScRoot>
    </Layout>
  );
};


export const Head = ({ pageContext: context }: any) => {
  const post = context.post;
  const url = 'https://xaolonist.io';
  const link = `${url}/blog/${post.slug}`;
  const cover = `${url}${post.cover}`;
  const title = post.title;
  const desc = post.summary;

  return <SEO title={title} cover={cover} desc={desc} url={link} />;
};

export default PostTemplate;
