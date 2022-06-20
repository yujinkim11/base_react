import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  h3 {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: aquamarine;
  margin-bottom: 20px;
`;

const BtnWrap = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export const ChoiceColor = () => {
  return (
    <Wrap>
      <h3>버튼을 눌러 색상을 골라보세요</h3>
      <Box></Box>
      <BtnWrap>
        <button style={{ width: "70px", height: "30px" }}>빨강</button>
        <button style={{ width: "70px", height: "30px" }}>노랑</button>
        <button style={{ width: "70px", height: "30px" }}>초록</button>
      </BtnWrap>
    </Wrap>
  );
};
