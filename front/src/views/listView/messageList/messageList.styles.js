import styled, { css } from 'styled-components';

export const ContentList = styled.ul`
  ${({ theme: { breakPoints: { smDevices, mdDevices, laptops }} }) => css`
    display: flex;
    flex-flow: row wrap;
    gap: 2.4rem 2%;
    padding-bottom: 5rem;

    li {
      width: 32%;
    }

    @media all and (${mdDevices.min}) and (${laptops.max}) {
      gap: 2.4rem 3.2%;

      li {
        width: 48.3%;
      }
    }

    @media all and (${smDevices.min}) and (${smDevices.max}) {
      gap: 2.4rem 0;

      li {
        width: 100%;
      }
    }
  `}
`;