import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
    ${({
        theme: {
            breakPoints: { laptops, smDevices, mdDevices },
            colors,
            wrappers,
        },
    }) => css`
        html {
            box-sizing: border-box;
            color: ${colors.brandDark};
            font-family: 'IBM Plex Sans', sans-serif;
            font-size: 62.5%;
            scroll-behavior: smooth;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
        }

        body {
            font-family: 'IBM Plex Sans', sans-serif;
            overflow-y: scroll;
            width: 100%;
        }

        *,
        *::before,
        *::after {
            box-sizing: border-box;
            margin: 0;
        }

        img,
        svg {
            user-select: none;
        }

        li {
            list-style: none;
        }

        a {
            color: inherit;
        }

        a,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ul,
        li,
        input,
        small,
        button {
            border: 0;
            margin: 0;
            padding: 0;
            text-decoration: none;
        }

        i {
            font-family: 'IBM Plex Serif', serif;
        }

        input,
        textarea,
        button {
            background: transparent;
            font-family: 'IBM Plex Sans', sans-serif;
            outline: none;
            user-select: none;
            -moz-osx-font-smoothing: grayscale;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: transparent;
            -webkit-font-smoothing: antialiased;
        }

        input,
        input:before,
        input:after {
            -webkit-user-select: initial;
            -khtml-user-select: initial;
            -moz-user-select: initial;
            -ms-user-select: initial;
            user-select: initial;
        }

        button {
            cursor: pointer;
            line-height: 1em;
        }

        .wrapper {
            margin: 0 auto;
            max-width: ${wrappers.desktop};

            // small desktop
            @media all and (${laptops.min}) and (${laptops.max}) {
                margin: 0 auto;
                max-width: ${wrappers.laptop};
            }

            // mobile
            @media all and (${smDevices.min}) and (${mdDevices.max}) {
                margin: 0 auto;
                max-width: ${wrappers.mobile};
            }
        }
    `}
`;
