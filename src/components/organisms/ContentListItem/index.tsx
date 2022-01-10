import { FC } from 'react';
import { Paragraph } from '../../atoms/Paragraph';
import { Button } from '../../molecules/Button';
import { Actions, Container, Icon, Info } from './index.styles';

export interface ContentListItemProps {
    /**
     * Send edit action intent to parent (Required)
     */
    edit: () => void;
    /**
     * Send exclude action intent to parent (Required)
     */
    exclude: () => void;
    /**
     * Post message. (Required)
     */
    message: string;
    /**
     * Social media name. (Required)
     */
    socialMedia: 'twitter';
    /**
     * Scheduled Date. (Required)
     */
    scheduledDate: string;
    /**
     * Scheduled Time. (Required)
     */
    scheduledTime: string;
}

/**
 * ContentListItem
 */
export const ContentListItem: FC<ContentListItemProps> = (props) => {
    const { edit, exclude, message, socialMedia, scheduledDate, scheduledTime } = props;

    const getDate = () => {
        const d = scheduledDate;
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const currentMonth = parseInt(`${d[3]}${d[4]}`) - 1;
        const day = `${d[0]}${d[1]}`;
        const month = `${months[currentMonth]}`;
        const year = `${d[6]}${d[7]}${d[8]}${d[9]}`;

        return `${day} ${month} ${year} - ${scheduledTime}`;
    };

    return (
        <Container>
            <Icon name={socialMedia} size="large" />
            <Info>
                <Paragraph colorPrimary="brandDarkAlpha60" size="s12">
                    {getDate()}
                </Paragraph>
                <Paragraph size="s20">{message}</Paragraph>
            </Info>
            <Actions>
                <Button click={edit} icon="edit" size="medium" variant="discreet" />
                <Button click={exclude} icon="trash" size="medium" variant="discreet" />
            </Actions>
        </Container>
    );
};
