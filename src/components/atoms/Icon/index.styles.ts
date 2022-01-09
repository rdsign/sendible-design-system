import styled, { css } from 'styled-components';
import { IconProps } from '.';

export const Container = styled.div<IconProps>`
    ${({ color = '#201E24', size = 'small' }) => css`
        fill: ${color};
        height: 1.125rem;
        width: 1.125rem;

        svg {
            height: 100%;
            width: 100%;
        }

        ${size === 'medium' &&
        css`
            height: 1.5rem;
            width: 1.5rem;
        `}
    `}
`;
