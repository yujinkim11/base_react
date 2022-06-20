import styled from "styled-components";

const BtnWrap = styled.div``;
const Items = styled.div``;

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
