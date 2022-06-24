import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyled = createGlobalStyle`
${reset}

*{
    box-sizing: border-box;
}

body{
    /* background-color: #555; */
    font-family: 'Noto Sans KR', sans-serif;
}

a{
 text-decoration : none;
 color: #1d1d1d;
}
`;

// export const mainStyle = {
//   color: "#1363DF",
//   fontSize: "26px",
// };
