import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

import Layout from "../components/layout";
import Post from "../components/post";

export default function Story() {
  const [flame, setFlame] = useState(true);
  const [zen, setZen] = useState(false);

  return (
    <Layout>
      {flame === true ? (
        <Content>
          <Heading>
            <Title>
              <a onClick={() => Router.back()}>
                <img src="/arrow-left-solid.svg" alt="back" />
              </a>
              <h1>Name of Story</h1>
              <Author>by Anonymous</Author>
            </Title>
            <Icons>
              {zen === true ? (
                <Flame>
                  <img
                    src="/flame-on.svg"
                    alt="flame"
                    onClick={() => setFlame(!flame)}
                  />
                </Flame>
              ) : null}
              <Zen>
                <img src="/zen.svg" alt="zen" onClick={() => setZen(!zen)} />
              </Zen>
            </Icons>
          </Heading>
          {zen === false ? (
            <StoryContainer>
              <ToC>
                <Chapter>Chapter I</Chapter>
                <SubSection>This is the sub-section</SubSection>
                <SubSection>This is the sub-section</SubSection>
                <Chapter>Chapter II</Chapter>
                <SubSection>This is the sub-section</SubSection>
                <SubSection>This is the sub-section</SubSection>
                <SubSection>This is the sub-section</SubSection>
                <SubSection>This is the sub-section</SubSection>
                <Chapter>Chapter III</Chapter>
                <SubSection>This is the sub-section</SubSection>
                <Chapter>Chapter IV</Chapter>
                <SubSection>This is the sub-section</SubSection>
                <SubSection>This is the sub-section</SubSection>
                <SubSection>This is the sub-section</SubSection>
              </ToC>

              <StoryContent>
                <Chapter>Chapter I</Chapter>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Porttitor rhoncus dolor purus non enim praesent elementum. Id
                  volutpat lacus laoreet non curabitur gravida. Ullamcorper
                  dignissim cras tincidunt lobortis feugiat vivamus at augue.
                  Egestas egestas fringilla phasellus faucibus scelerisque
                  eleifend. Semper auctor neque vitae tempus quam. Proin
                  sagittis nisl rhoncus mattis rhoncus. Diam volutpat commodo
                  sed egestas. Dictum at tempor commodo ullamcorper a lacus.
                  Odio euismod lacinia at quis risus sed vulputate odio ut.
                  Sagittis orci a scelerisque purus semper. Sed felis eget velit
                  aliquet sagittis id consectetur purus. Sit amet est placerat
                  in egestas erat. Tincidunt vitae semper quis lectus. Diam
                  donec adipiscing tristique risus. <br /> <br /> Et netus et
                  malesuada fames. Arcu odio ut sem nulla pharetra. Turpis
                  egestas integer eget aliquet. Rhoncus aenean vel elit
                  scelerisque mauris. Vitae aliquet nec ullamcorper sit amet
                  risus. Nisl vel pretium lectus quam id leo. Non enim praesent
                  elementum facilisis leo vel fringilla est. Consectetur purus
                  ut faucibus pulvinar elementum. Ante in nibh mauris cursus.
                  Velit ut tortor pretium viverra suspendisse potenti nullam ac.
                  Ultrices neque ornare aenean euismod elementum nisi. Posuere
                  ac ut consequat semper viverra nam libero justo laoreet.
                  Volutpat maecenas volutpat blandit aliquam etiam erat. Sodales
                  neque sodales ut etiam sit amet. <br /> <br /> Sem fringilla
                  ut morbi tincidunt. Ut enim blandit volutpat maecenas volutpat
                  blandit aliquam etiam. Duis ultricies lacus sed turpis
                  tincidunt id aliquet risus. Tempus imperdiet nulla malesuada
                  pellentesque. Arcu dictum varius duis at consectetur lorem.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                  Sodales ut etiam sit amet nisl purus in mollis nunc. Congue eu
                  consequat ac felis donec et odio pellentesque diam. Faucibus a
                  pellentesque sit amet. In arcu cursus euismod quis viverra
                  nibh. Auctor elit sed vulputate mi sit. Est ultricies integer
                  quis auctor elit sed vulputate mi. Condimentum mattis
                  pellentesque id nibh tortor. Ornare massa eget egestas purus
                  viverra accumsan in nisl nisi. <br /> <br /> Sem fringilla ut
                  morbi tincidunt. Ut enim blandit volutpat maecenas volutpat
                  blandit aliquam etiam. Duis ultricies lacus sed turpis
                  tincidunt id aliquet risus. Tempus imperdiet nulla malesuada
                  pellentesque. Arcu dictum varius duis at consectetur lorem.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                  Sodales ut etiam sit amet nisl purus in mollis nunc. Congue eu
                  consequat ac felis donec et odio pellentesque diam. Faucibus a
                  pellentesque sit amet. In arcu cursus euismod quis viverra
                  nibh. Auctor elit sed vulputate mi sit. Est ultricies integer
                  quis auctor elit sed vulputate mi. Condimentum mattis
                  pellentesque id nibh tortor. Ornare massa eget egestas purus
                  viverra accumsan in nisl nisi.
                  <br />
                  <br />
                  <Chapter>Chapter II</Chapter>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Porttitor rhoncus dolor purus non enim praesent elementum. Id
                  volutpat lacus laoreet non curabitur gravida. Ullamcorper
                  dignissim cras tincidunt lobortis feugiat vivamus at augue.
                  Egestas egestas fringilla phasellus faucibus scelerisque
                  eleifend. Semper auctor neque vitae tempus quam. Proin
                  sagittis nisl rhoncus mattis rhoncus. Diam volutpat commodo
                  sed egestas. Dictum at tempor commodo ullamcorper a lacus.
                  Odio euismod lacinia at quis risus sed vulputate odio ut.
                  Sagittis orci a scelerisque purus semper. Sed felis eget velit
                  aliquet sagittis id consectetur purus. Sit amet est placerat
                  in egestas erat. Tincidunt vitae semper quis lectus. Diam
                  donec adipiscing tristique risus. <br /> <br /> Et netus et
                  malesuada fames. Arcu odio ut sem nulla pharetra. Turpis
                  egestas integer eget aliquet. Rhoncus aenean vel elit
                  scelerisque mauris. Vitae aliquet nec ullamcorper sit amet
                  risus. Nisl vel pretium lectus quam id leo. Non enim praesent
                  elementum facilisis leo vel fringilla est. Consectetur purus
                  ut faucibus pulvinar elementum. Ante in nibh mauris cursus.
                  Velit ut tortor pretium viverra suspendisse potenti nullam ac.
                  Ultrices neque ornare aenean euismod elementum nisi. Posuere
                  ac ut consequat semper viverra nam libero justo laoreet.
                  Volutpat maecenas volutpat blandit aliquam etiam erat. Sodales
                  neque sodales ut etiam sit amet. <br /> <br /> Sem fringilla
                  ut morbi tincidunt. Ut enim blandit volutpat maecenas volutpat
                  blandit aliquam etiam. Duis ultricies lacus sed turpis
                  tincidunt id aliquet risus. Tempus imperdiet nulla malesuada
                  pellentesque. Arcu dictum varius duis at consectetur lorem.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                  Sodales ut etiam sit amet nisl purus in mollis nunc. Congue eu
                  consequat ac felis donec et odio pellentesque diam. Faucibus a
                  pellentesque sit amet. In arcu cursus euismod quis viverra
                  nibh. Auctor elit sed vulputate mi sit. Est ultricies integer
                  quis auctor elit sed vulputate mi. Condimentum mattis
                  pellentesque id nibh tortor. Ornare massa eget egestas purus
                  viverra accumsan in nisl nisi. <br /> <br /> Sem fringilla ut
                  morbi tincidunt. Ut enim blandit volutpat maecenas volutpat
                  blandit aliquam etiam. Duis ultricies lacus sed turpis
                  tincidunt id aliquet risus. Tempus imperdiet nulla malesuada
                  pellentesque. Arcu dictum varius duis at consectetur lorem.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                  Sodales ut etiam sit amet nisl purus in mollis nunc. Congue eu
                  consequat ac felis donec et odio pellentesque diam. Faucibus a
                  pellentesque sit amet. In arcu cursus euismod quis viverra
                  nibh. Auctor elit sed vulputate mi sit. Est ultricies integer
                  quis auctor elit sed vulputate mi. Condimentum mattis
                  pellentesque id nibh tortor. Ornare massa eget egestas purus
                  viverra accumsan in nisl nisi.
                </p>
              </StoryContent>
            </StoryContainer>
          ) : null}
          {zen === true ? (
            <StoryContainerZen>
              <StoryContent>
                <Chapter>Chapter I</Chapter>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Porttitor rhoncus dolor purus non enim praesent elementum. Id
                  volutpat lacus laoreet non curabitur gravida. Ullamcorper
                  dignissim cras tincidunt lobortis feugiat vivamus at augue.
                  Egestas egestas fringilla phasellus faucibus scelerisque
                  eleifend. Semper auctor neque vitae tempus quam. Proin
                  sagittis nisl rhoncus mattis rhoncus. Diam volutpat commodo
                  sed egestas. Dictum at tempor commodo ullamcorper a lacus.
                  Odio euismod lacinia at quis risus sed vulputate odio ut.
                  Sagittis orci a scelerisque purus semper. Sed felis eget velit
                  aliquet sagittis id consectetur purus. Sit amet est placerat
                  in egestas erat. Tincidunt vitae semper quis lectus. Diam
                  donec adipiscing tristique risus. <br /> <br /> Et netus et
                  malesuada fames. Arcu odio ut sem nulla pharetra. Turpis
                  egestas integer eget aliquet. Rhoncus aenean vel elit
                  scelerisque mauris. Vitae aliquet nec ullamcorper sit amet
                  risus. Nisl vel pretium lectus quam id leo. Non enim praesent
                  elementum facilisis leo vel fringilla est. Consectetur purus
                  ut faucibus pulvinar elementum. Ante in nibh mauris cursus.
                  Velit ut tortor pretium viverra suspendisse potenti nullam ac.
                  Ultrices neque ornare aenean euismod elementum nisi. Posuere
                  ac ut consequat semper viverra nam libero justo laoreet.
                  Volutpat maecenas volutpat blandit aliquam etiam erat. Sodales
                  neque sodales ut etiam sit amet. <br /> <br /> Sem fringilla
                  ut morbi tincidunt. Ut enim blandit volutpat maecenas volutpat
                  blandit aliquam etiam. Duis ultricies lacus sed turpis
                  tincidunt id aliquet risus. Tempus imperdiet nulla malesuada
                  pellentesque. Arcu dictum varius duis at consectetur lorem.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                  Sodales ut etiam sit amet nisl purus in mollis nunc. Congue eu
                  consequat ac felis donec et odio pellentesque diam. Faucibus a
                  pellentesque sit amet. In arcu cursus euismod quis viverra
                  nibh. Auctor elit sed vulputate mi sit. Est ultricies integer
                  quis auctor elit sed vulputate mi. Condimentum mattis
                  pellentesque id nibh tortor. Ornare massa eget egestas purus
                  viverra accumsan in nisl nisi. <br /> <br /> Sem fringilla ut
                  morbi tincidunt. Ut enim blandit volutpat maecenas volutpat
                  blandit aliquam etiam. Duis ultricies lacus sed turpis
                  tincidunt id aliquet risus. Tempus imperdiet nulla malesuada
                  pellentesque. Arcu dictum varius duis at consectetur lorem.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                  Sodales ut etiam sit amet nisl purus in mollis nunc. Congue eu
                  consequat ac felis donec et odio pellentesque diam. Faucibus a
                  pellentesque sit amet. In arcu cursus euismod quis viverra
                  nibh. Auctor elit sed vulputate mi sit. Est ultricies integer
                  quis auctor elit sed vulputate mi. Condimentum mattis
                  pellentesque id nibh tortor. Ornare massa eget egestas purus
                  viverra accumsan in nisl nisi.
                  <br />
                  <br />
                  <Chapter>Chapter II</Chapter>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Porttitor rhoncus dolor purus non enim praesent elementum. Id
                  volutpat lacus laoreet non curabitur gravida. Ullamcorper
                  dignissim cras tincidunt lobortis feugiat vivamus at augue.
                  Egestas egestas fringilla phasellus faucibus scelerisque
                  eleifend. Semper auctor neque vitae tempus quam. Proin
                  sagittis nisl rhoncus mattis rhoncus. Diam volutpat commodo
                  sed egestas. Dictum at tempor commodo ullamcorper a lacus.
                  Odio euismod lacinia at quis risus sed vulputate odio ut.
                  Sagittis orci a scelerisque purus semper. Sed felis eget velit
                  aliquet sagittis id consectetur purus. Sit amet est placerat
                  in egestas erat. Tincidunt vitae semper quis lectus. Diam
                  donec adipiscing tristique risus. <br /> <br /> Et netus et
                  malesuada fames. Arcu odio ut sem nulla pharetra. Turpis
                  egestas integer eget aliquet. Rhoncus aenean vel elit
                  scelerisque mauris. Vitae aliquet nec ullamcorper sit amet
                  risus. Nisl vel pretium lectus quam id leo. Non enim praesent
                  elementum facilisis leo vel fringilla est. Consectetur purus
                  ut faucibus pulvinar elementum. Ante in nibh mauris cursus.
                  Velit ut tortor pretium viverra suspendisse potenti nullam ac.
                  Ultrices neque ornare aenean euismod elementum nisi. Posuere
                  ac ut consequat semper viverra nam libero justo laoreet.
                  Volutpat maecenas volutpat blandit aliquam etiam erat. Sodales
                  neque sodales ut etiam sit amet. <br /> <br /> Sem fringilla
                  ut morbi tincidunt. Ut enim blandit volutpat maecenas volutpat
                  blandit aliquam etiam. Duis ultricies lacus sed turpis
                  tincidunt id aliquet risus. Tempus imperdiet nulla malesuada
                  pellentesque. Arcu dictum varius duis at consectetur lorem.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                  Sodales ut etiam sit amet nisl purus in mollis nunc. Congue eu
                  consequat ac felis donec et odio pellentesque diam. Faucibus a
                  pellentesque sit amet. In arcu cursus euismod quis viverra
                  nibh. Auctor elit sed vulputate mi sit. Est ultricies integer
                  quis auctor elit sed vulputate mi. Condimentum mattis
                  pellentesque id nibh tortor. Ornare massa eget egestas purus
                  viverra accumsan in nisl nisi. <br /> <br /> Sem fringilla ut
                  morbi tincidunt. Ut enim blandit volutpat maecenas volutpat
                  blandit aliquam etiam. Duis ultricies lacus sed turpis
                  tincidunt id aliquet risus. Tempus imperdiet nulla malesuada
                  pellentesque. Arcu dictum varius duis at consectetur lorem.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                  Sodales ut etiam sit amet nisl purus in mollis nunc. Congue eu
                  consequat ac felis donec et odio pellentesque diam. Faucibus a
                  pellentesque sit amet. In arcu cursus euismod quis viverra
                  nibh. Auctor elit sed vulputate mi sit. Est ultricies integer
                  quis auctor elit sed vulputate mi. Condimentum mattis
                  pellentesque id nibh tortor. Ornare massa eget egestas purus
                  viverra accumsan in nisl nisi.
                </p>
              </StoryContent>
            </StoryContainerZen>
          ) : null}
        </Content>
      ) : (
        <ContentDark>
          <HeadingDark>
            <Title>
              <a onClick={() => Router.back()}>
                <img src="/arrow-left-solid.svg" alt="back" />
              </a>
              <h1>Name of Story</h1>
              <Author>by Anonymous</Author>
            </Title>
            <Icons>
              {zen === true ? (
                <Flame>
                  <img
                    src="/flame-off.svg"
                    alt="flame"
                    onClick={() => setFlame(!flame)}
                  />
                </Flame>
              ) : null}
              <Zen>
                <img src="/zen.svg" alt="zen" onClick={() => setZen(!zen)} />
              </Zen>
            </Icons>
          </HeadingDark>
          <StoryContainerZen>
            <StoryContentDark>
              <ChapterDark>Chapter I</ChapterDark>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Porttitor rhoncus dolor purus non enim praesent elementum. Id
                volutpat lacus laoreet non curabitur gravida. Ullamcorper
                dignissim cras tincidunt lobortis feugiat vivamus at augue.
                Egestas egestas fringilla phasellus faucibus scelerisque
                eleifend. Semper auctor neque vitae tempus quam. Proin sagittis
                nisl rhoncus mattis rhoncus. Diam volutpat commodo sed egestas.
                Dictum at tempor commodo ullamcorper a lacus. Odio euismod
                lacinia at quis risus sed vulputate odio ut. Sagittis orci a
                scelerisque purus semper. Sed felis eget velit aliquet sagittis
                id consectetur purus. Sit amet est placerat in egestas erat.
                Tincidunt vitae semper quis lectus. Diam donec adipiscing
                tristique risus. <br /> <br /> Et netus et malesuada fames. Arcu
                odio ut sem nulla pharetra. Turpis egestas integer eget aliquet.
                Rhoncus aenean vel elit scelerisque mauris. Vitae aliquet nec
                ullamcorper sit amet risus. Nisl vel pretium lectus quam id leo.
                Non enim praesent elementum facilisis leo vel fringilla est.
                Consectetur purus ut faucibus pulvinar elementum. Ante in nibh
                mauris cursus. Velit ut tortor pretium viverra suspendisse
                potenti nullam ac. Ultrices neque ornare aenean euismod
                elementum nisi. Posuere ac ut consequat semper viverra nam
                libero justo laoreet. Volutpat maecenas volutpat blandit aliquam
                etiam erat. Sodales neque sodales ut etiam sit amet. <br />{" "}
                <br /> Sem fringilla ut morbi tincidunt. Ut enim blandit
                volutpat maecenas volutpat blandit aliquam etiam. Duis ultricies
                lacus sed turpis tincidunt id aliquet risus. Tempus imperdiet
                nulla malesuada pellentesque. Arcu dictum varius duis at
                consectetur lorem. Pulvinar elementum integer enim neque
                volutpat ac tincidunt. Sodales ut etiam sit amet nisl purus in
                mollis nunc. Congue eu consequat ac felis donec et odio
                pellentesque diam. Faucibus a pellentesque sit amet. In arcu
                cursus euismod quis viverra nibh. Auctor elit sed vulputate mi
                sit. Est ultricies integer quis auctor elit sed vulputate mi.
                Condimentum mattis pellentesque id nibh tortor. Ornare massa
                eget egestas purus viverra accumsan in nisl nisi. <br /> <br />{" "}
                Sem fringilla ut morbi tincidunt. Ut enim blandit volutpat
                maecenas volutpat blandit aliquam etiam. Duis ultricies lacus
                sed turpis tincidunt id aliquet risus. Tempus imperdiet nulla
                malesuada pellentesque. Arcu dictum varius duis at consectetur
                lorem. Pulvinar elementum integer enim neque volutpat ac
                tincidunt. Sodales ut etiam sit amet nisl purus in mollis nunc.
                Congue eu consequat ac felis donec et odio pellentesque diam.
                Faucibus a pellentesque sit amet. In arcu cursus euismod quis
                viverra nibh. Auctor elit sed vulputate mi sit. Est ultricies
                integer quis auctor elit sed vulputate mi. Condimentum mattis
                pellentesque id nibh tortor. Ornare massa eget egestas purus
                viverra accumsan in nisl nisi.
                <br />
                <br />
                <ChapterDark>Chapter II</ChapterDark>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Porttitor rhoncus dolor purus non enim praesent elementum. Id
                volutpat lacus laoreet non curabitur gravida. Ullamcorper
                dignissim cras tincidunt lobortis feugiat vivamus at augue.
                Egestas egestas fringilla phasellus faucibus scelerisque
                eleifend. Semper auctor neque vitae tempus quam. Proin sagittis
                nisl rhoncus mattis rhoncus. Diam volutpat commodo sed egestas.
                Dictum at tempor commodo ullamcorper a lacus. Odio euismod
                lacinia at quis risus sed vulputate odio ut. Sagittis orci a
                scelerisque purus semper. Sed felis eget velit aliquet sagittis
                id consectetur purus. Sit amet est placerat in egestas erat.
                Tincidunt vitae semper quis lectus. Diam donec adipiscing
                tristique risus. <br /> <br /> Et netus et malesuada fames. Arcu
                odio ut sem nulla pharetra. Turpis egestas integer eget aliquet.
                Rhoncus aenean vel elit scelerisque mauris. Vitae aliquet nec
                ullamcorper sit amet risus. Nisl vel pretium lectus quam id leo.
                Non enim praesent elementum facilisis leo vel fringilla est.
                Consectetur purus ut faucibus pulvinar elementum. Ante in nibh
                mauris cursus. Velit ut tortor pretium viverra suspendisse
                potenti nullam ac. Ultrices neque ornare aenean euismod
                elementum nisi. Posuere ac ut consequat semper viverra nam
                libero justo laoreet. Volutpat maecenas volutpat blandit aliquam
                etiam erat. Sodales neque sodales ut etiam sit amet. <br />{" "}
                <br /> Sem fringilla ut morbi tincidunt. Ut enim blandit
                volutpat maecenas volutpat blandit aliquam etiam. Duis ultricies
                lacus sed turpis tincidunt id aliquet risus. Tempus imperdiet
                nulla malesuada pellentesque. Arcu dictum varius duis at
                consectetur lorem. Pulvinar elementum integer enim neque
                volutpat ac tincidunt. Sodales ut etiam sit amet nisl purus in
                mollis nunc. Congue eu consequat ac felis donec et odio
                pellentesque diam. Faucibus a pellentesque sit amet. In arcu
                cursus euismod quis viverra nibh. Auctor elit sed vulputate mi
                sit. Est ultricies integer quis auctor elit sed vulputate mi.
                Condimentum mattis pellentesque id nibh tortor. Ornare massa
                eget egestas purus viverra accumsan in nisl nisi. <br /> <br />{" "}
                Sem fringilla ut morbi tincidunt. Ut enim blandit volutpat
                maecenas volutpat blandit aliquam etiam. Duis ultricies lacus
                sed turpis tincidunt id aliquet risus. Tempus imperdiet nulla
                malesuada pellentesque. Arcu dictum varius duis at consectetur
                lorem. Pulvinar elementum integer enim neque volutpat ac
                tincidunt. Sodales ut etiam sit amet nisl purus in mollis nunc.
                Congue eu consequat ac felis donec et odio pellentesque diam.
                Faucibus a pellentesque sit amet. In arcu cursus euismod quis
                viverra nibh. Auctor elit sed vulputate mi sit. Est ultricies
                integer quis auctor elit sed vulputate mi. Condimentum mattis
                pellentesque id nibh tortor. Ornare massa eget egestas purus
                viverra accumsan in nisl nisi.
              </p>
            </StoryContentDark>
          </StoryContainerZen>
        </ContentDark>
      )}
    </Layout>
  );
}

const Content = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
`;

const ContentDark = styled(Content)`
  background: #676767;
`;

const Heading = styled.div`
  width: 100%;
  min-height: 75px;
  padding-left: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f5f5f5;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-family: "Futura PT", serif;
    font-weight: 700;
    color: #808080;
    font-size: 36px;
  }
`;

const Title = styled.div`
  display: flex;

  img {
    width: 25px;
    margin-right: 20px;
    color: #808080;
    cursor: pointer;
  }
`;

const Author = styled.h2`
  font-style: italic;
  color: #808080;
  font-size: 18px;
  margin-left: 20px;
`;

const HeadingDark = styled(Heading)`
  h1,
  h2 {
    color: white;
  }
`;

const StoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 350px 1fr;
  height: calc(100vh - 75px);
`;

const StoryContainerZen = styled(StoryContainer)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  height: calc(100vh - 75px);
`;

const ToC = styled.div`
  overflow: scroll;
  padding-left: 40px;
  border-right: 1px solid #f5f5f5;
`;

const StoryContent = styled.div`
  background-color: #faf9f9;
  overflow: scroll;
  font-family: "Crimson Text", serif;
  padding-right: 15%;
  padding-left: 15%;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #808080;
  font-size: 18px;
  line-height: 25px;

  p::first-letter {
    font-size: 60px;
  }
`;

const StoryContentDark = styled(StoryContent)`
  color: white;
  background-color: #333333;
`;

const Chapter = styled.h1`
  font-weight: 700;
  font-size: 24px;
  padding-top: 20px;
  color: #808080;
  font-family: "Crimson Text", serif;
`;

const ChapterDark = styled(Chapter)`
  color: white;
`;

const SubSection = styled.h3`
  font-weight: 500;
  font-size: 18px;
  padding-left: 50px;
  color: #808080;
  font-family: "Crimson Text", serif;
`;

const Icons = styled.div`
  display: flex;
  margin-right: 30px;
`;

const Flame = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Zen = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
