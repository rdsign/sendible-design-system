import { FC } from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import GlobalStyle from '../../../theme/GlobalStyle';
import { theme } from '../../../theme';

export const ThemeProvider: FC = ({ children }) => (
    <Provider theme={theme}>
        <GlobalStyle />
        {children}
    </Provider>
);
