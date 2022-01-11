import { FC } from 'react';
import { Icon } from '../../atoms/Icon';
import { Container } from './index.styles';

export interface FeedbackProps {
    /**
     * Icon name. (Required)
     */
    icon: 'calendar' | 'clock' | 'close' | 'danger' | 'edit' | 'globe' | 'trash' | 'tweets' | 'twitter';
    /**
     * Text message. (Required)
     */
    message: string;
}

/**
 * Feedback
 */
export const Feedback: FC<FeedbackProps> = (props) => {
    const { icon, message } = props;

    return (
        <Container {...props}>
            <Icon name={icon} size="small" />
            {message}
        </Container>
    );
};
