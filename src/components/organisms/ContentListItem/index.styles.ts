import styled, { css } from 'styled-components';
import { Icon as DIcon } from '../../atoms/Icon';

export const Container = styled.li`
    ${({ theme: { borderRadius, colors } }) => css`
        align-items: flex-start;
        background: ${colors.brandWhite};
        border: 1px solid ${colors.brandDarkAlpha20};
        border-radius: ${borderRadius.small};
        display: flex;
        height: 16.8rem;
        justify-content: space-between;
        padding: 2rem 3rem;
    `}
`;

export const Icon = styled(DIcon)`
    ${({ theme: { colors } }) => css`
        fill: ${colors.socialTwitter};
        margin-right: 2rem;
        min-width: 2.4rem;
    `}
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    & p:nth-child(1) {
        margin-bottom: 1.5rem;
    }

    & p:nth-child(2) {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const Actions = styled.div`
    align-items: center;
    display: flex;
    margin-left: 0.5rem;
    margin-top: -0.5rem;
    margin-right: -0.5rem;
`;
