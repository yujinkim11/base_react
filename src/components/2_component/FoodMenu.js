import "../../styles/style.css";

export const FoodMenu = ({ menuName, SideName }) => {
  // console.log(menuName);
  // => 프롭스는 오브젝트 형태로 가져오기 때문에 매개변수에 중괄호를 적고 작성할 것
  return (
    <div>
      오늘의 메뉴는 <i className="main">{menuName}</i> 사이드 메뉴는
      <i className="side">{SideName}</i>
      {/* => jsx 안쪽에 변수를 사용할 시 중괄호로 감싸줄 것 */}
    </div>
  );
};
