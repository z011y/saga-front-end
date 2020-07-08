import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Router from "next/router";

import Layout from "../components/layout";
import Post from "../components/post";

export default function Genres() {
  const router = useRouter();
  const { genre } = router.query;

  return (
    <Layout>
      <Content>
        <Heading>
          <a onClick={() => Router.back()}>
            <img src="/arrow-left-solid.svg" alt="back" />
          </a>
          <h1>{genre}</h1>
        </Heading>
        <PostsContainer>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </PostsContainer>
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  width: 100%;
  height: 100%;
  background: #faf9f9;
  background-size: cover;
  background-position: center;
  background-repeat: none;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  margin-left: 40px;
  margin-top: 25px;
  display: flex;

  h1 {
    color: #808080;
    font-size: 42px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }

  img {
    width: 25px;
  }
`;

const PostsContainer = styled.ul`
  width: 100%;
  height: 100%;
`;
