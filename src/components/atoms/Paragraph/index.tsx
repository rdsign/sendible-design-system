import { FC } from 'react';
import { brandColorsUnion } from '../../../theme';
import { Container } from './index.styles';

export interface ParagraphProps {
    /**
     * Text main color. (Optional | Default: brandDark)
     */
    colorPrimary?: typeof brandColorsUnion[number];
    /**
     * Text secondary color. For <i> and <a> childrens (Optional | Default: brandPrimary)
     */
    colorSecondary?: typeof brandColorsUnion[number];
    /**
     * Font size. (Optional | Default: s16)
     */
    size?: 's20' | 's18' | 's16' | 's12';
    /**
     * Font weight. (Optional | Default: regular)
     */
    fontWeight?: 'regular' | 'medium' | 'semiBold';
}

/**
 * Paragraph
 */
export const Paragraph: FC<ParagraphProps> = (props) => {
    const { children } = props;

    return <Container {...props}>{children}</Container>;
};
