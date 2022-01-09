import styled, { css } from 'styled-components';
import { HeadingProps } from '.';

export const Container = styled.h1<HeadingProps>`
    ${({ theme: { colors, sizings }, size, colorPrimary = 'brandDark', colorSecondary = 'brandAccentAlpha90' }) => css`
        color: ${colors[colorPrimary]};
        font-size: ${sizings[size]};
        font-weight: 500;
        line-height: 1em;

        i {
            color: ${colors[colorSecondary]};
            font-weight: 400;
        }
    `}
`;
