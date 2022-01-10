export const theme = {
    borderRadius: {
        small: '0.4rem',
        large: '10rem',
    },
    breakPoints: {
        smDevices: {
            min: 'min-width: 260px',
            max: 'max-width: 767px',
        },
        mdDevices: {
            min: 'min-width: 768px',
            max: 'max-width: 1024px',
        },
        laptops: {
            min: 'min-width: 1025px',
            max: 'max-width: 1440px',
        },
        desktop: {
            min: 'min-width: 1441px',
        },
    },
    colors: {
        brandPrimary: '#4D36FF',
        brandPrimaryAlpha05: '#F6F5FF',
        brandPrimaryAlpha20: '#DBD7FF',
        brandPrimaryShade10: '#4531E6',
        brandAccent: '#FF6153',
        brandAccentAlpha90: '#FF7064',
        brandDark: '#201E24',
        brandDarkAlpha70: '#626165',
        brandDarkAlpha60: '#79787C',
        brandDarkAlpha40: '#A6A5A7',
        brandDarkAlpha20: '#D2D2D3',
        brandDarkAlpha05: '#F4F4F4',
        brandWhite: '#FFFFFF',
        semanticDanger: '#E50A1F',
        semanticDangerShade10: '#CE091C',
        semanticDangerAlpha05: '#FEF3F4',
        socialTwitter: '#1DA1F2',
    },
    motions: {
        cubic: 'cubic-bezier(0.5, 1, 0.5, 1)',
    },
    sizings: {
        s12: '1.2rem',
        s16: '1.6rem',
        s18: '1.8rem',
        s20: '2rem',
        s32: '3.2rem',
        s64: '6.4rem',
        s80: '8rem',
    },
    wrappers: {
        desktop: '120rem',
        laptop: '90rem',
        mobile: 'calc(100vw - 4.8rem)',
    },
    zIndexes: {
        bellow: -1,
        step: 1,
        priority: 10,
        topPriority: 100,
    },
};

export const brandColors = Object.keys(theme.colors).filter((i) => i.match(/^brand+/));
export const semanticColors = Object.keys(theme.colors).filter((i) => i.match(/^semantic+/));
export const socialColors = Object.keys(theme.colors).filter((i) => i.match(/^social+/));
export const sizings = Object.keys(theme.sizings);

export const brandColorsUnion = [
    'brandPrimary',
    'brandPrimaryAlpha05',
    'brandAccent',
    'brandAccentAlpha90',
    'brandDark',
    'brandDarkAlpha70',
    'brandDarkAlpha60',
    'brandDarkAlpha40',
    'brandDarkAlpha20',
    'brandDarkAlpha05',
    'brandWhite',
] as const;
export const semanticColorsUnion = ['semanticDanger', 'semanticDangerShade10', 'semanticDangerAlpha05'] as const;
export const socialColorsUnion = ['socialTwitter'] as const;
export const allColorsValuesUnion = [
    '#4D36FF',
    '#4D36FF0D',
    '#FF6153',
    '#FF6153E6',
    '#201E24',
    '#201E24B3',
    '#201E2499',
    '#201E2466',
    '#201E2433',
    '#201E240D',
    '#FFFFFF',
    '#E50A1F',
    '#CE091C',
    '#E50A1F0D',
    '#1DA1F2',
] as const;
export const sizingsUnion = ['s12', 's16', 's18', 's20', 's32', 's64', 's80'] as const;
