export const MenuEx = ({ menu }) => {
  return (
    <>
      <div>
        <h1>오늘의 메뉴</h1>
        <ul>
          <li>
            오늘의 메뉴는 {menu[0].main} 사이드 {menu[0].side}
          </li>
          <li>
            오늘의 메뉴는 {menu[1].main} 사이드 {menu[1].side}
          </li>
          <li>
            오늘의 메뉴는 {menu[2].main} 사이드 {menu[2].side}
          </li>
          <li>
            오늘의 메뉴는 {menu[3].main} 사이드 {menu[3].side}
          </li>
          <li>
            오늘의 메뉴는 {menu[4].main} 사이드 {menu[4].side}
          </li>
        </ul>
      </div>
    </>
  );
};
