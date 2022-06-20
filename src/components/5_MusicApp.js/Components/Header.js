import styled from "styled-components";

const Sheader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Menus = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(1) {
    background-color: white;
    color: #1d1d1d;
    font-size: 12px;
  }
  &:nth-child(2) {
    border: 1px solid white;
    font-size: 12px;
  }
`;

export const Header = () => {
  return (
    <Sheader>
      <Menus>
        <i class="fa-solid fa-chevron-down"></i>
      </Menus>
      <Menus>
        <i class="fa-solid fa-bars"></i>
      </Menus>
    </Sheader>
  );
};
