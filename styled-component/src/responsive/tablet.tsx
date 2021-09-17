import { css } from "styled-components";

export const tablet = (props: any) => {
  return css`
    @media only screen and (max-width: 800px) {
      ${props}
    }
  `;
};
