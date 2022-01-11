import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme: { borderRadius, colors, zIndexes } }) => css`
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: ${zIndexes.topPriority};
    `}
`;

export const Content = styled.div`
    ${({ theme: { borderRadius, colors } }) => css`
        background: ${colors.brandWhite};
        border-radius: ${borderRadius.small};
        display: flex;
        flex-direction: column;
        padding: 2.4rem;
        position: relative;
        width: 44.8rem;

        textarea {
            margin-top: 3.6rem;
            max-height: 24rem;
            width: 100%;
        }

        .feedbacks {
            margin: 0.4rem 0 1.6rem;

            p {
                line-height: 1em;
            }
        }

        .right {
            place-self: flex-end;
        }

        .input-titles {
            margin-bottom: 0.4rem;
        }
    `}
`;

export const Row = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: 0 1.6rem;

    & label[mask='date'] {
        flex: 6.2;
    }

    & label[mask='time'] {
        flex: 3.8;
    }
`;

export const Title = styled.div`
    align-items: center;
    display: flex;

    button {
        margin-right: 1.6rem;
    }
`;

export const Timezone = styled.div`
    align-items: center;
    display: flex;

    & p:nth-child(2) {
        margin: 0 0.4rem;
    }
`;

export const Mask = styled.div`
    ${({ theme: { colors, zIndexes } }) => css`
        backdrop-filter: blur(10px);
        background: ${colors.brandDark};
        cursor: pointer;
        height: 100%;
        opacity: 0.8;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: ${zIndexes.bellow};
    `}
`;
