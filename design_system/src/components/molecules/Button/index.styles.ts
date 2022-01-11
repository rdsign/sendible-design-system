import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export const Container = styled.button<ButtonProps>`
    ${({ theme: { borderRadius, colors, motions, sizings }, icon, label, size = 'medium', variant = 'fill' }) => css`
        align-items: center;
        border: 0.3rem solid ${colors.brandWhite};
        border-radius: ${borderRadius.large};
        display: flex;
        font-weight: 500;
        justify-content: center;
        transition: border 0.3s, background-color 0.3s ${motions.cubic};

        // sizes
        ${size === 'small' &&
        css`
            font-size: ${sizings.s12};
            padding: 0.75rem 1rem;

            & div[name='${icon}'] {
                margin-right: 0.4rem;
            }

            ${!label &&
            css`
                padding: 0.75rem;
            `}
        `}

        ${size === 'medium' &&
        css`
            font-size: ${sizings.s16};
            padding: 1rem 1.33rem;

            & div[name='${icon}'] {
                margin-right: 0.53rem;
            }

            ${!label &&
            css`
                padding: 1rem;
            `}
        `}

        ${size === 'large' &&
        css`
            font-size: ${sizings.s20};
            padding: 1.25rem 1.67rem;

            & div[name='${icon}'] {
                margin-right: 0.67rem;
            }

            ${!label &&
            css`
                padding: 1.25rem;
            `}
        `}

        // conditional icon margin
        ${!label &&
        css`
            & div[name='${icon}'] {
                margin-right: 0;
            }
        `}

        // variants
        ${variant === 'discreet' &&
        css`
            background: transparent;
            color: ${colors.brandDark};

            * {
                fill: ${colors.brandDark};
            }

            &:hover {
                background: ${colors.brandDarkAlpha05};
            }

            &:focus,
            :active {
                background: ${colors.brandDarkAlpha05};
                border: 0.3rem solid ${colors.brandDarkAlpha20};
            }
        `}

        ${variant === 'fill' &&
        css`
            background: ${colors.brandPrimary};
            color: ${colors.brandWhite};

            * {
                fill: ${colors.brandWhite};
            }

            &:hover {
                background: ${colors.brandPrimaryShade10};
            }

            &:focus,
            :active {
                background: ${colors.brandPrimaryShade10};
                border: 0.3rem solid ${colors.brandPrimaryAlpha20};
            }
        `}

        ${variant === 'floating' &&
        css`
            background: ${colors.brandPrimary};
            border: none;
            box-shadow: 0 0.6rem 0.6rem #201e2433;
            color: ${colors.brandWhite};
            font-size: 0;
            height: 5rem;
            transition: border 0s, box-shadow 0.3s, background-color 0.3s ${motions.cubic};
            width: 5rem;

            & div[name='${icon}'] {
                margin-right: 0;
            }

            * {
                fill: ${colors.brandWhite};
            }

            &:hover {
                background: ${colors.brandPrimaryShade10};
                box-shadow: none;
            }

            &:focus,
            :active {
                background: ${colors.brandPrimaryShade10};
                border: 0.3rem solid ${colors.brandPrimaryAlpha20};
                box-shadow: none;
                height: 5.6rem;
                width: 5.6rem;
            }
        `}

        // states
        &:disabled {
            background: transparent;
            color: ${colors.brandDarkAlpha20};
            cursor: default;

            * {
                fill: ${colors.brandDarkAlpha20};
            }
        }
    `}
`;
