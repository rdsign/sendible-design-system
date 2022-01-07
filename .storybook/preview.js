import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
    align-items: center;
    display: flex;
    font-family: "IBM Plex Sans", sans-serif;
    justify-content: center;
`;

export const decorators = [
    (Story) => (
        <Container>
            <Story />
        </Container>
    ),
];
