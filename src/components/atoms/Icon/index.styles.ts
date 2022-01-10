import styled, { css } from 'styled-components';
import { IconProps } from '.';

export const Container = styled.div<IconProps>`
    ${({ color = '#201E24', size = 'medium' }) => css`
        fill: ${color};

        svg {
            height: 100%;
            width: 100%;
        }

        ${size === 'small' &&
        css`
            height: 1.2rem;
            width: 1.2rem;
        `}

        ${size === 'medium' &&
        css`
            height: 1.8rem;
            width: 1.8rem;
        `}

        ${size === 'large' &&
        css`
            height: 2.4rem;
            width: 2.4rem;
        `}
    `}
`;
