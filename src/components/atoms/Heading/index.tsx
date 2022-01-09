import { FC } from 'react';
import { brandColorsUnion, sizingsUnion } from '../../../theme';
import { Container } from './index.styles';

export interface HeadingProps {
    /**
     * Heading main color. (Optional | Default: brandDark)
     */
    colorPrimary?: typeof brandColorsUnion[number];
    /**
     * Heading secondary color. For <i> childrens (Optional | Default: brandAccentAlpha90)
     */
    colorSecondary?: typeof brandColorsUnion[number];
    /**
     * Semantic name. E.g.: h1, h2, etc. (Required) (The Heading tags are semantic items. In my opinion they shouldn't have fixed size. For example, in the Post list screen, the H1 is the "Scheduled tweets". If i follow the design, instead of use an H1 element i'd use H4 instead.)
     */
    name: 'h1' | 'h2' | 'h4';
    /**
     * Font size. E.g.: s80, s64, s32, etc. (Required)
     */
    size: typeof sizingsUnion[number];
}

/**
 * Heading
 */
export const Heading: FC<HeadingProps> = (props) => {
    const { children, name } = props;

    return (
        <Container as={name} {...props}>
            {children}
        </Container>
    );
};
