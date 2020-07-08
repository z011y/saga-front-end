import styled from "styled-components";
import Link from "next/link";

export default function Post() {
  return (
    <Link href="/story" passHref>
      <PostWrapper>
        <Name>Name of Story</Name>
        <p>Description of the story</p>
        <p>Number of Pages</p>
      </PostWrapper>
    </Link>
  );
}

const PostWrapper = styled.li`
  height: 80px;
  width: 100%;
  font-family: "Crimson Text", serif;
  padding: 10px;
  font-size: 18px;
  color: #808080;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #e2f8ff !important;
  }

  &:nth-child(odd) {
    background-color: white;
  }
`;

const Name = styled.h1`
  font-weight: bold;
  font-size: 24px;
  transition: 0.2s ease-in-out;
`;
