import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

import Footer from "./footer";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <title>Saga</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/eji6hio.css"
        ></link>
      </Head>
      {router.pathname === "/story" ? null : (
        <Header>
          <LogoWrapper>
            <Link href="/" passHref>
              <img src="/saga-logo.svg" alt="Saga Logo" />
            </Link>
          </LogoWrapper>
          <LinksWrapper>
            <Link href="/genres" passHref>
              <NavLink>Genres</NavLink>
            </Link>
            <Link href="/login" passHref>
              <NavLink>Log In</NavLink>
            </Link>
            <Link href="/join" passHref>
              <NavLinkAlt>Join Now</NavLinkAlt>
            </Link>
          </LinksWrapper>
        </Header>
      )}
      <main>{children}</main>
      {router.pathname === "/story" ? null : <Footer />}
    </div>
  );
}

const Header = styled.header`
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  padding-left: 40px;
  z-index: 1000;
  border-bottom: 1px solid #f5f5f5;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 150px;
  color: #808080;
  font-size: 24px;

  img {
    width: 75%;
    cursor: pointer;
  }
`;

const LinksWrapper = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled.a`
  font-family: "Futura PT", sans-serif;
  font-size: 18px;
  color: #676767;
`;

const NavLinkAlt = styled(NavLink)`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #676767;
  color: white;
`;
