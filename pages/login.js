import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

import Layout from "../components/layout";
import Post from "../components/post";

export default function Login() {
  const [error, setError] = useState("");

  return (
    <Layout>
      <Content>
        <LoginForm>
          <Title>Log In</Title>
          <Label>Email</Label>
          <Input
            placeholder="smashin_jotnar@9worlds.com"
            type="email"
            autofocus="true"
          ></Input>
          <Label>Password</Label>
          <Input placeholder="*********" type="password"></Input>
          <ErrorText>{error}</ErrorText>
          <Button
            onClick={() => setError("Oops! This is a front-end app only")}
          >
            Login
          </Button>
          <Join>
            Don't have an account? <Link href="/join">Join now</Link>
          </Join>
        </LoginForm>
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/login-background.svg");
  background-size: cover;
  background-position: center;
`;

const LoginForm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 50px 100px 50px 100px;
  border-radius: 5px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  margin-top: 50px;
  background-color: white;
  justify-content: center;
`;

const Title = styled.h1`
  color: #808080;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: #808080;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  margin-bottom: 25px;
  border-radius: 5px;
  border: 5px solid #faf9f9;
  padding-left: 10px;
  transition: 0.25s ease-in-out;
  font-family: "Crimson Text", sans-serif;
  color: #808080;

  &:focus,
  &:active {
    outline: none;
    border: 5px solid #b2ebf2;
  }

  &::placeholder {
    font-family: "Crimson Text", sans-serif;
    color: #c0c0c0;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  height: 10px;
  align-self: center;
`;

const Button = styled.a`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  font-family: "Futura PT", sans-serif;
  text-align: center;
  align-self: center;
  margin-bottom: 5px;
  background-color: white;
  color: #676767;
  border: 5px solid #b2ebf2;
  line-height: 40px;
`;

const Join = styled.p`
  font-size: 14px;
  color: #808080;
  align-self: center;
`;
