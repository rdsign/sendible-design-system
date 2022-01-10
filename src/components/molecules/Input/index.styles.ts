import styled, { css } from 'styled-components';
import { Icon as DIcon } from '../../atoms/Icon';
import { InputProps } from '.';

export const Container = styled.label<InputProps>`
    ${({ theme: { borderRadius, colors, sizings }, icon, hasError }) => css`
        align-items: center;
        background: ${colors.brandDarkAlpha05};
        border-radius: ${borderRadius.small};
        display: flex;
        flex-direction: row;
        position: relative;

        input {
            border: 0.1rem solid ${colors.brandDarkAlpha05};
            border-radius: ${borderRadius.small};
            color: ${colors.brandDark};
            font-size: ${sizings.s20};
            height: 100%;
            padding: 1rem 0;
            padding-left: ${icon ? '5rem' : '2rem'};
            width: 100%;

            &::placeholder {
                color: ${colors.brandDarkAlpha40};
            }

            &:focus {
                background: ${colors.brandPrimaryAlpha05};
                border: 0.1rem solid ${colors.brandPrimary};
            }

            ${hasError &&
            css`
                background: ${colors.semanticDangerAlpha05};
                border: 0.1rem solid ${colors.semanticDanger};
            `}
        }
    `}
`;

export const Icon = styled(DIcon)`
    left: 1.25rem;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
`;
