import { FC, ChangeEvent, useEffect, useRef } from 'react';
import { Container, Icon } from './index.styles';
import * as masks from '../../system/masks';

export interface InputProps {
    /**
     * Send click event to parent (Required)
     */
    change: (e: string) => void;
    /**
     * Controls error visual feedback. (Optional | Default: false)
     */
    hasError?: boolean;
    /**
     * Icon name. (Optional | Default: undefined)
     */
    icon?: 'calendar' | 'clock' | 'close' | 'danger' | 'edit' | 'globe' | 'trash' | 'tweets' | 'twitter';
    /**
     * Id attribute. (Optional)
     */
    id?: string;
    /**
     * Initial value. (Optional)
     */
    initialValue?: string;
    /**
     * Mask option. E.g.: date (Optional)
     */
    mask?: 'date' | 'time';
    /**
     * Input max length. (Optional)
     */
    maxLength?: number;
    /**
     * Placeholder text. (Optional)
     */
    placeholder?: string;
}

export const Input: FC<InputProps> = (props) => {
    const { change, hasError, icon, id, initialValue, mask, maxLength, placeholder } = props;

    const ref = useRef<any>(null);

    useEffect(() => {
        initialValue && (ref.current.value = initialValue);
    }, [initialValue]);

    const handleChange = (v: string) => {
        let format = v;
        if (mask) {
            format = masks[mask](v);
        }
        ref.current.value = format;
        change(format);
    };

    return (
        <Container {...props}>
            {icon && <Icon name={icon} size="large" />}
            <input
                id={id}
                maxLength={maxLength}
                placeholder={placeholder}
                ref={ref}
                type="input"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
            />
        </Container>
    );
};
