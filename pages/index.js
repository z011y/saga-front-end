import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Content>
        <Heading>Tell your story.</Heading>
        <SubHeading>
          A platform for storytellers and poets.
          <br />
          Share your short story or poem.
        </SubHeading>
        <ButtonsWrapper>
          <Link href="/genres" passHref>
            <Button>Start Reading</Button>
          </Link>
          <Link href="/join">
            <AltButton>Join Now</AltButton>
          </Link>
        </ButtonsWrapper>
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/saga-background.svg");
  background-size: cover;
  background-position: center;
  background-repeat: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-weight: 700;
  color: #676767;
  font-size: 100px;
  line-height: 100px;
`;

const SubHeading = styled.h2`
  color: #676767;
  font-family: "Crimson Text", serif;
`;

const ButtonsWrapper = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.a`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background-color: #676767;
  margin: 20px;
  font-family: "Futura PT", sans-serif;
  text-align: center;
  line-height: 50px;
  color: white;
`;

const AltButton = styled(Button)`
  background-color: white;
  color: #676767;
  border: 5px solid #b2ebf2;
  line-height: 40px;
`;
