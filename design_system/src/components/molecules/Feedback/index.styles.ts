import styled, { css } from 'styled-components';
import { FeedbackProps } from '.';

export const Container = styled.span<FeedbackProps>`
    ${({ theme: { colors, sizings } }) => css`
        align-items: center;
        color: ${colors.semanticDangerShade10};
        display: flex;
        font-size: ${sizings.s12};
        font-weight: 500;
        line-height: 1em;
        user-select: none;

        div {
            fill: ${colors.semanticDanger};
            margin-right: 0.5rem;
        }
    `}
`;
