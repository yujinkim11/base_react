import TagRule from "./components/1_JsxRule/TagRule";
import ClassComponent from "./components/2_component/ClassComponent";
// import FnComponent from "./components/2_component/FnComponent";
import {
  FnComponent_1,
  FnComponent_2,
} from "./components/2_component/FnComponent";
import { FoodMenu } from "./components/2_component/FoodMenu";

const App = () => {
  return (
    <div>
      {/* <TagRule /> */}
      {/* 1일차    */}
      {/* <FnComponent /> */}
      {/* <FnComponent_1 />
      <FnComponent_2 /> */}
      {/* <ClassComponent /> */}

      {/* * props => <컴포넌트 프롭스명="값" /> */}
      <h3>아침메뉴</h3>
      <FoodMenu menuName="계란밥" SideName="아메리카노" />

      <h3>점심메뉴</h3>
      <FoodMenu menuName="햄버거" SideName="콜라" />

      <h3>저녁메뉴</h3>
      <FoodMenu menuName="마라탕" SideName="홍차" />

      {/* 2일차 */}
    </div>
  );
};

export default App;
