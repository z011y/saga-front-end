import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <FooterContainer>
      <Column>
        <LogoWrapper>
          <img src="/saga-logo.svg" alt="Saga Logo" />
        </LogoWrapper>
        <p>A platform for storytellers and poets.</p>
      </Column>
      <Column>
        <LinksWrapper>
          <Title>Genres</Title>
          <Link href="/Myths">Myths</Link>
          <Link href="/Folklore">Folklore</Link>
          <Link href="/Fantasy">Fantasy</Link>
          <Link href="/Sci-Fi">Sci-Fi</Link>
          <Link href="/Religious">Religious</Link>
          <Link href="/Historical Fiction">Historical Fiction</Link>
          <Link href="/Fan Fiction">Fan Fiction</Link>
          <Link href="/Epic Poems">Epic Poems</Link>
        </LinksWrapper>
      </Column>
      <Column>
        <LinksWrapperAlt>
          <Link href="/join" passHref>
            <NavLinkAlt>Join Now</NavLinkAlt>
          </Link>
          <Link href="/login" passHref>
            <NavLink>Log In</NavLink>
          </Link>
        </LinksWrapperAlt>
      </Column>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: white;
  z-index: 100;
  padding: 100px;
  display: grid;
  font-family: "Crimson Text", sans-serif;
  font-size: 18px;
  color: #808080;
  grid-template-columns: 1fr 0.25fr 1fr;

  img {
    width: 200px;
  }

  p {
    margin-block-start: 0px;
    margin-block-end: 0px;
  }
`;

const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 150px;
  color: #808080;
  font-size: 24px;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  a {
    color: #808080;
    margin-bottom: 5px;
  }
`;

const LinksWrapperAlt = styled(LinksWrapper)`
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Futura PT", sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
`;

const NavLink = styled.a`
  font-family: "Futura PT", sans-serif;
  font-size: 18px;
  color: #676767;
  margin-bottom: 20px !important;
`;

const NavLinkAlt = styled(NavLink)`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #676767;
  color: white !important;
`;
