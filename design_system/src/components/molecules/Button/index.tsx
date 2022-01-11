import { FC, MouseEvent } from 'react';
import { Icon } from '../../atoms/Icon';
import { Container } from './index.styles';

export interface ButtonProps {
    /**
     * Send click event to parent (Required)
     */
    click: (e: MouseEvent) => void;
    /**
     * Icon name. (Optional | Default: undefined)
     */
    icon?: 'calendar' | 'clock' | 'close' | 'danger' | 'edit' | 'globe' | 'trash' | 'tweets' | 'twitter';
    /**
     * Control button disable prop. (Optional | Default: false)
     */
    isDisabled?: boolean;
    /**
     * Text label. (Optional | Default: undefined)
     */
    label?: string;
    /**
     * Button size. (Optional | Default: medium)
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Design variant. (Optional | Default: fill)
     */
    variant?: 'discreet' | 'fill' | 'floating';
}

/**
 * Button
 */
export const Button: FC<ButtonProps> = (props) => {
    const { click, icon, isDisabled = false, label, size = 'medium' } = props;

    return (
        <Container type="button" onClick={(e: MouseEvent) => click(e)} disabled={isDisabled} {...props}>
            {icon && <Icon name={icon} size={size} />}
            {label}
        </Container>
    );
};
