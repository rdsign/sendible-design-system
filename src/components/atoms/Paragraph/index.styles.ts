import styled, { css } from 'styled-components';
import { ParagraphProps } from '.';

export const Container = styled.p<ParagraphProps>`
    ${({
        theme: { colors, sizings },
        colorPrimary = 'brandDark',
        colorSecondary = 'brandPrimary',
        fontWeight = 'regular',
        size = 's16',
    }) => css`
        color: ${colors[colorPrimary]};
        font-size: ${sizings[size]};
        font-weight: 400;
        line-height: 1.5em;

        i,
        a {
            color: ${colors[colorSecondary]};
        }

        ${fontWeight === 'medium' &&
        css`
            font-weight: 500;
        `}

        ${fontWeight === 'semiBold' &&
        css`
            font-weight: 600;
        `}
    `}
`;
