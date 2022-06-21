import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 250px 0 250px;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-right: 500px;
  color: #1d1d1d;
`;

const Menu = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #1d1d1d;
`;

export const Navi = () => {
  return (
    <Wrap>
      <Link to="/">
        <Logo>HERA</Logo>
      </Link>
      <Link to="/menu1">
        <Menu>메뉴1</Menu>
      </Link>
      <Link to="/menu2">
        <Menu>메뉴2</Menu>
      </Link>
    </Wrap>
  );
};
