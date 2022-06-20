import TagRule from "./components/1_JsxRule/TagRule";
import ClassComponent from "./components/2_component/ClassComponent";
// import FnComponent from "./components/2_component/FnComponent";
import {
  FnComponent_1,
  FnComponent_2,
} from "./components/2_component/FnComponent";
import { MenuEx } from "./components/3_props/MenuEx";
import { kakaoDB, LanguageDB, MenuDB, todayMenu } from "./DB";
import { Menus } from "./components/3_props/Menus";
import { Subject } from "./components/3_props/subject";
import { subjectDB } from "./DB";
import { FoodMenu } from "./components/4_map/FoodMenu";
import { Kakao } from "./components/4_map/Kakao";
import { KakaoDB } from "./DB";
import { Content } from "./components/4_map/Content";
import { MapEx } from "./components/4_map/MapEx";
import { LangDB } from "./DB";
import { ConEx } from "./components/4_map/ConEx";
import { GlobalStyled } from "./styles/GlobalStyled";
import { Icons } from "./components/5_MusicApp.js/Icons";
import { IconEx } from "./components/5_MusicApp.js/IconEx";
import { Music } from "./components/5_MusicApp.js/Music";
import { ClassEvent } from "./components/6_Event/ClassEvent";
import { FnEvent } from "./components/6_Event/FnEvent";
import { ColorEx } from "./components/6_Event/ColorEx";
import { ChoiceColor } from "./components/6_Event/ChoiceColor";

const App = () => {
  return (
    <div>
      <GlobalStyled />
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
      {/* <Content /> */}
      {/* <MapEx data={LangDB} /> */}
      {/* <ConEx conData={LangDB} /> */}
      {/* <Icons /> */}
      {/* <IconEx /> */}
      {/* <Music /> */}
      {/* <ClassEvent /> */}
      {/* <FnEvent /> */}
      {/* <ColorEx /> */}
      <ChoiceColor />
    </div>
  );
};

export default App;
