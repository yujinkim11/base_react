import styled from "styled-components";

const SBottomPlay = styled.div``;
const Profile = styled.div``;
const Avatar = styled.div``;
const NextBtn = styled.div``;

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
