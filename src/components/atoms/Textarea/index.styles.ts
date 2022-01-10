import styled, { css } from 'styled-components';
import { TextareaProps } from '.';

interface ContainerProps extends TextareaProps {
    currentHeight: number;
}

export const Container = styled.textarea<ContainerProps>`
    ${({ theme: { borderRadius, colors, sizings }, currentHeight, hasError }) => css`
        background: ${colors.brandDarkAlpha05};
        border: 0.1rem solid ${colors.brandDarkAlpha05};
        border-radius: ${borderRadius.small};
        color: ${colors.brandDark};
        font-size: ${sizings.s20};
        height: ${currentHeight}px;
        overflow: hidden;
        padding: 1rem 2rem;
        resize: none;

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
    `}
`;
