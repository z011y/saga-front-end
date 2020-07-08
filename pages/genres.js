import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import Layout from "../components/layout";

export default function Genres() {
  return (
    <Layout>
      <Content>
        <Heading>
          <h1>Genres</h1>
        </Heading>
        <GenreGrid>
          <Link href="/Myths" passHref>
            <GenreItem>
              <h2>Myths</h2>
              <img src="/bolt.svg" alt="bolt" />
            </GenreItem>
          </Link>
          <Link href="/Folklore" passHref>
            <GenreItem>
              <h2>Folklore</h2>
              <img src="/axe.svg" alt="axe" />
            </GenreItem>
          </Link>
          <Link href="/Fantasy" passHref>
            <GenreItem>
              <h2>Fantasy</h2>
              <img src="/fantasy.svg" alt="fantasy" />
            </GenreItem>
          </Link>
          <Link href="/Sci-Fi" passHref>
            <GenreItem>
              <h2>Sci-Fi</h2>
              <img src="/alien.svg" alt="alien" />
            </GenreItem>
          </Link>
          <Link href="/Religious" passHref>
            <GenreItem>
              <h2>Religious</h2>
              <img src="/cross.svg" alt="cross" />
            </GenreItem>
          </Link>
          <Link href="/Historical Fiction" passHref>
            <GenreItem>
              <h2>Historical Fiction</h2>
              <img src="/top-hat.svg" alt="top hat" />
            </GenreItem>
          </Link>
          <Link href="/Fan Fiction" passHref>
            <GenreItem>
              <h2>Fan Fiction</h2>
              <img src="/bang.svg" alt="bang" />
            </GenreItem>
          </Link>
          <Link href="/Epic Poems" passHref>
            <GenreItem>
              <h2>Epic Poems</h2>
              <img src="/poem.svg" alt="poem" />
            </GenreItem>
          </Link>
        </GenreGrid>
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
`;

const GenreGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 50px;
  padding: 50px;
`;

const GenreItem = styled.div`
  background-color: white;
  border: 5px solid #b2ebf2;
  box-shadow: 10px 10px 40px rgba(128, 222, 234, 0.25);
  border-radius: 20px;
  height: 250px;
  padding: 20px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Crimson Text", serif;
    font-weight: 700;
    font-size: 32px;
    color: #808080;
    margin-block-start: 0px;
    margin-block-end: 0px;
    z-index: 1;
  }

  img {
    height: 200px;
    margin-top: -50px;
  }

  &:hover {
    box-shadow: 10px 10px 50px rgba(128, 222, 234, 0.5);
  }
`;
