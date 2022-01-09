export const theme = {
    borderRadius: {
        small: '0.25rem',
        large: '8rem',
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
        brandPrimaryAlpha05: '#4D36FF0D',
        brandAccent: '#FF6153',
        brandAccentAlpha90: '#FF6153E6',
        brandDark: '#201E24',
        brandDarkAlpha70: '#201E24B3',
        brandDarkAlpha60: '#201E2499',
        brandDarkAlpha40: '#201E2466',
        brandDarkAlpha20: '#201E2433',
        brandDarkAlpha05: '#201E240D',
        brandWhite: '#FFFFFF',
        semanticDanger: '#E50A1F',
        semanticDangerShade10: '#CE091C',
        semanticDangerAlpha05: '#E50A1F0D',
        socialTwitter: '#1DA1F2',
    },
    sizings: {
        s12: '0.75rem',
        s16: '1rem',
        s18: '1.125rem',
        s20: '1.25rem',
        s32: '2rem',
        s64: '4rem',
        s80: '5rem',
    },
    wrappers: {
        desktop: '75rem',
        laptop: '56.25rem',
        mobile: 'calc(100vw - 2.875rem)',
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
