import styled from "styled-components";

const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Items = styled.div`
  font-size: 15px;
  &:nth-child(3) {
    width: 50px;
    height: 50px;
    background-color: mediumseagreen;
    border-radius: 50%;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonWrap = () => {
  return (
    <BtnWrap>
      <Items>
        <i class="fa-solid fa-shuffle"></i>
      </Items>

      <Items>
        <i class="fa-solid fa-backward"></i>
      </Items>

      <Items>
        <i class="fa-solid fa-pause"></i>
      </Items>

      <Items>
        <i class="fa-solid fa-forward"></i>
      </Items>

      <Items>
        <i class="fa-solid fa-repeat"></i>
      </Items>
    </BtnWrap>
  );
};
