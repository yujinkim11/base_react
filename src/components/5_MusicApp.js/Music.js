import styled from "styled-components";

import { Header } from "./Components/Header";
import { TitleWrap } from "./Components/TitleWrap";
import { PlayWrap } from "./Components/PlayWrap";
import { ButtonWrap } from "./Components/ButtonWrap";
import { BottomPlay } from "./Components/BottomPlay";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Section = styled.div`
  width: 375px;
  height: 667px;
  background-color: #1d1d1d;
  border-radius: 25px;
  padding: 40px;
`;

const CoverImg = styled.div``;

export const Music = () => {
  return (
    <Wrap>
      <Section>
        <Header />

        <CoverImg />

        <TitleWrap />

        <PlayWrap />

        <ButtonWrap />

        <BottomPlay />
      </Section>
    </Wrap>
  );
};
