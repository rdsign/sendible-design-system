import 'styled-components';

export interface MinMax {
    max?: string;
    min?: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: {
            [k: string]: string | undefined;
            small: string;
            large: string;
        };
        breakPoints: {
            smDevices: MinMax;
            mdDevices: MinMax;
            laptops: MinMax;
            desktop: MinMax;
        };
        colors: {
            [k: string]: string | undefined;
            brandPrimary: string;
            brandPrimaryAlpha05: string;
            brandAccent: string;
            brandAccentAlpha90: string;
            brandDark: string;
            brandDarkAlpha70: string;
            brandDarkAlpha60: string;
            brandDarkAlpha40: string;
            brandDarkAlpha20: string;
            brandDarkAlpha05: string;
            brandWhite: string;
            semanticDanger: string;
            semanticDangerShade10: string;
            semanticDangerAlpha05: string;
            socialTwitter: string;
        };
        sizings: {
            [k: string]: string | undefined;
            s12: string;
            s16: string;
            s18: string;
            s20: string;
            s32: string;
            s64: string;
            s80: string;
        };
        wrappers: {
            desktop: string;
            laptop: string;
            mobile: string;
        };
        zIndexes: {
            [k: string]: number | undefined;
            bellow: number;
            step: number;
            priority: number;
            topPriority: number;
        };
    }
}
