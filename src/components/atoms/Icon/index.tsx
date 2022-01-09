import { FC } from 'react';
import { ReactSVG } from 'react-svg';
import * as icons from './iconList.exports';
import { allColorsValuesUnion } from '../../../theme';
import { Container } from './index.styles';

export interface IconProps {
    /**
     * Icon name. E.g.: calendar, trash, etc. (Required)
     */
    name: 'calendar' | 'clock' | 'close' | 'danger' | 'edit' | 'globe' | 'trash' | 'tweets' | 'twitter';
    /**
     * Icon color. (Optional | Default: brandDark)
     */
    color?: typeof allColorsValuesUnion[number];
    /**
     * Icon size. (Optional | Default: small)
     */
    size?: 'small' | 'medium';
}

/**
 * Icon
 */
export const Icon: FC<IconProps> = (props) => {
    const { name } = props;

    const svg = icons[name];

    return (
        <Container {...props}>
            <ReactSVG src={svg} wrapper="svg" width="24" height="24" viewBox="0 0 24 24" />
        </Container>
    );
};
