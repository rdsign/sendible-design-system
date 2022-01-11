import { version } from '../package.json';
import { create } from '@storybook/theming/create';
import Logo from './images/logo.png';

export default create({
    base: 'light',
    brandTitle: `Sendible v.${version}`,
    brandUrl: 'https://github.com/rdsign/sendible-design-system',
    brandImage: Logo,
    colorPrimary: '#4D36FF',
    colorSecondary: '#201E24',

    // UI
    appBg: 'white',
    appContentBg: 'white',
    appBorderRadius: 4,

    // Typography
    fontBase: '"IBM Plex Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#201E24',
    textInverseColor: 'white',

    // Toolbar default and active colors
    barTextColor: '#201E24',
    barSelectedColor: '#201E24',
    barBg: 'white',

    // Form colors
    inputBg: 'transparent',
    inputBorder: 'white',
    inputTextColor: '#201E24',
    inputBorderRadius: 8,
});
