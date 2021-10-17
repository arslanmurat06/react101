import { css } from "styled-components";

export const bigScreen = (props:any) => {
  return css`
    @media only screen and (min-width: 900px) {
      ${props}
    }
  `;
};