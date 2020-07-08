import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

import Layout from "../components/layout";
import Post from "../components/post";

export default function Join() {
  const [error, setError] = useState("");
  return (
    <Layout>
      <Content>
        <SignUpForm>
          <Title>Create an Account</Title>
          <Label>Name</Label>
          <Input
            placeholder="Thor Odinson"
            type="text"
            autofocus="true"
          ></Input>
          <Label>Email</Label>
          <Input placeholder="smashin_jotnar@9worlds.com" type="email"></Input>
          <Label>Password</Label>
          <Input placeholder="*********" type="password"></Input>
          <PasswordRequirements>
            <Column>
              <Requirement>* One lowercase character</Requirement>
              <Requirement>* One uppercase character</Requirement>
              <Requirement>* One number</Requirement>
            </Column>
            <Column>
              <Requirement>* One special character</Requirement>
              <Requirement>* At least 8 characters</Requirement>
            </Column>
          </PasswordRequirements>
          <ErrorText>{error}</ErrorText>
          <Button
            onClick={() => setError("Oops! This is a front-end app only")}
          >
            Create Account
          </Button>
          <Login>
            Already have an account? <Link href="/login">Log in</Link>
          </Login>
        </SignUpForm>
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
  background-image: url("/join-background.svg");
  background-position: center;
  background-size: cover;
`;

const SignUpForm = styled.div`
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

const PasswordRequirements = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Requirement = styled.p`
  margin-block-start: 0px;
  margin-block-end: 0px;
  font-size: 12px;
  color: #808080;
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

const Login = styled.p`
  font-size: 14px;
  color: #808080;
  align-self: center;
`;
