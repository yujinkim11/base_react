import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
`;

const ConWrap = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 30%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #333;
  a {
    color: white;
  }
`;

const Bg = styled.div`
  height: 350px;
  background-color: lightgray;
`;

const TitleWrap = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 26px;
  font-weight: 900;
`;

const Desc = styled.p`
  font-weight: 100;
  margin-top: 20px;
`;

export const ConEx = ({ conData }) => {
  console.log(conData);
  return (
    <Wrap>
      <ConWrap>
        {conData.map((lang) => (
          <Con key={lang.id}>
            <a href={lang.url}>
              <Bg
                style={{
                  background: `url(${lang.imgUrl}) no-repeat center / cover`,
                }}
              />
              <TitleWrap>
                <Title>{lang.title}</Title>
                <Desc>{lang.con}</Desc>
              </TitleWrap>
            </a>
          </Con>
        ))}
      </ConWrap>
    </Wrap>
  );
};

// *background 축약
// => background: url() no-repeat 위치 / 크기 (center / cover )
