import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({theme: { breakPoints: { smDevices }, colors, sizings, zIndexes }}) => css`
    background: ${colors.brandWhite};
    border-bottom: 0.1rem solid ${colors.brandDarkAlpha20};
    top: 0;
    margin-bottom: 32px;
    padding: ${sizings.s32} 0;
    position: sticky;
    z-index: ${zIndexes.priority};
    
    .wrapper {
      align-items: center;
      display: flex;
      justify-content: space-between;

      & button:nth-child(2) {
        display: flex;
      }

      & button:nth-child(3) {
        display: none;
      }

      @media all and (${smDevices.min}) and (${smDevices.max}) {
        & button:nth-child(2) {
          display: none;
        }

        & button:nth-child(3) {
          bottom: 2.4rem;
          display: flex;
          position: fixed;
          right: 2.4rem;
        }
      }
    }
  `}
`;