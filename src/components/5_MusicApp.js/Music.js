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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoverImg = styled.div`
  width: 90%;
  height: 280px;
  border-radius: 25px;
  box-shadow: 0 15px 20px 10px rgba(0, 0, 0, 0.3);
  margin: 30px 0;
`;

export const Music = () => {
  return (
    <Wrap>
      <Section>
        <Header />

        <CoverImg
          style={{
            background: `url(https://cdnimg.melon.co.kr/cm2/album/images/109/09/179/10909179_20220405103521_500.jpg?f1db0eeac1f61dd8a9c7696bdb50aea8/melon/resize/282/quality/80/optimize) no-repeat center / cover`,
          }}
        />

        <TitleWrap />

        <PlayWrap />

        <ButtonWrap />

        <BottomPlay />
      </Section>
    </Wrap>
  );
};
