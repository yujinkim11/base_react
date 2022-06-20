import styled from "styled-components";

const SBottomPlay = styled.div`
  width: 100%;
  height: 50px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #f1f1f1;
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  font-size: 12px;
  font-weight: 700;
`;

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: gray;
  margin-right: 10px;
`;

const NextBtn = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1d1d1d;
  font-size: 12px;
`;

export const BottomPlay = () => {
  return (
    <SBottomPlay>
      <Profile>
        <Avatar />
        <h3>yujin</h3>
      </Profile>
      <NextBtn>
        <i class="fa-solid fa-forward-step"></i>
      </NextBtn>
    </SBottomPlay>
  );
};
