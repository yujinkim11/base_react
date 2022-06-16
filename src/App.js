import TagRule from "./components/1_JsxRule/TagRule";
import ClassComponent from "./components/2_component/ClassComponent";
// import FnComponent from "./components/2_component/FnComponent";
import {
  FnComponent_1,
  FnComponent_2,
} from "./components/2_component/FnComponent";
import { MenuEx } from "./components/3_props/MenuEx";
import { kakaoDB, MenuDB, todayMenu } from "./DB";
import { Menus } from "./components/3_props/Menus";
import { Subject } from "./components/3_props/subject";
import { subjectDB } from "./DB";
import { FoodMenu } from "./components/4_map/FoodMenu";
import { Kakao } from "./components/4_map/Kakao";
import { KakaoDB } from "./DB";
import { Content } from "./components/4_map/Content";

const App = () => {
  return (
    <div>
      {/* <TagRule /> */}
      {/* 1일차    */}

      {/* <FnComponent /> */}
      {/* <FnComponent_1 />
      <FnComponent_2 /> */}
      {/* <ClassComponent /> */}
      {/* 2일차 */}

      {/* <Menus /> */}
      {/* <Subject sub={subjectDB} /> */}
      {/* <MenuEx menu={MenuDB} /> */}
      {/* 3일차 */}
      {/* <FoodMenu menus={MenuDB} /> */}
      {/* <Kakao kakaoData={KakaoDB} /> */}
      <Content />
    </div>
  );
};

export default App;
