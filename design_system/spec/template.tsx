import { FC } from 'react';
import { ThemeProvider } from '../src/index';

export const Template: FC = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};
