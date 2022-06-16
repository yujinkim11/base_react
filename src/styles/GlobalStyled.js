import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyled = createGlobalStyle`
${reset}

*{
    box-sizing: border-box;
}
`;

export const mainStyle = {
  color: "#1363DF",
  fontSize: "26px",
};
