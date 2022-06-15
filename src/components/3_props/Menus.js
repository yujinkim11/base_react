import { FoodMenu } from "../2_component/FoodMenu";

export const Menus = () => {
  return (
    <>
      {/* * props => <컴포넌트 프롭스명="값" /> */}
      <h3>아침메뉴</h3>
      <FoodMenu menuName="계란밥" SideName="아메리카노" />

      <h3>점심메뉴</h3>
      <FoodMenu menuName="햄버거" SideName="콜라" />

      <h3>저녁메뉴</h3>
      <FoodMenu menuName="마라탕" SideName="홍차" />
    </>
  );
};
