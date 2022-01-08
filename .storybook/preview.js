import * as React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '../src/index';
import { theme } from '../src/theme';

const { colors } = theme;
const presetColors = Object.entries(colors).map((color) => ({
    color: color[1],
    title: color[0],
}));

export const parameters = {
    controls: {
        expanded: true,
        presetColors: presetColors,
    },
    layout: 'centered',
    backgrounds: {
        default: 'Light',
        values: [
            { name: 'Light', value: colors.brandWhite },
            { name: 'Dark', value: colors.brandDark },
        ],
    },
};

const Container = styled.div`
    align-items: center;
    display: flex;
    font-family: 'IBM Plex Sans', sans-serif;
    justify-content: center;
`;

export const decorators = [
    (Story) => (
        <ThemeProvider>
            <Container>
                <Story />
            </Container>
        </ThemeProvider>
    ),
];
