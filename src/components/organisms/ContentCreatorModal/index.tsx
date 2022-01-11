import { FC, ChangeEvent, useState, useEffect } from 'react';
import moment from 'moment';
import * as validations from '../../system/validations';
import { Icon } from '../../atoms/Icon';
import { Paragraph } from '../../atoms/Paragraph';
import { Textarea } from '../../atoms/Textarea';
import { Button } from '../../molecules/Button';
import { Feedback } from '../../molecules/Feedback';
import { Input } from '../../molecules/Input';
import { Container, Content, Mask, Row, Timezone, Title } from './index.styles';

interface InitialValues {
    message: string;
    date: string;
    time: string;
}

export interface ContentCreatorModalProps {
    /**
     * Send close action intent to parent (Required)
     */
    close: () => void;
    /**
     * Send save action intent to parent (Required)
     */
    save: (payload: InitialValues) => void;
    /**
     * Initial values for the fields. (Optional)
     */
    initialValues?: InitialValues;
    /**
     * Textarea placeholder. (Required)
     */
    messagePlaceholder: string;
    /**
     * Save button label. (Required)
     */
    saveButtonLabel: string;
    /**
     * When label. (Required)
     */
    timingLabel: string;
    /**
     * Modal title. (Required)
     */
    title: string;
}

/**
 * ContentCreatorModal
 */
export const ContentCreatorModal: FC<ContentCreatorModalProps> = (props) => {
    const { close, save, initialValues, messagePlaceholder, saveButtonLabel, timingLabel, title } = props;

    const [message, setMessage] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [messageFeedback, setMessageFeedback] = useState<string>('');
    const [messageError, setMessageError] = useState<boolean>(false);
    const [remainingLength, setRemainingLength] = useState<number>(280);
    const [dateFeedback, setDateFeedback] = useState<string>('');
    const [timezone] = useState<string>(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [hasError, setHasError] = useState<boolean>(false);

    const { validateDate } = validations;

    useEffect(() => {
        initialValues &&
            (setDate(initialValues.date), setMessage(initialValues.message || ''), setTime(initialValues.time));
    }, [initialValues]);

    const handleSave = () => {
        if (message.length < 10) {
            setMessageFeedback('The message must contain 10 characters or more.');
            setMessageError(true);
            setHasError(true);
        }
        if (!moment(date, 'DD/MM/YYYY', true).isValid()) {
            setDateFeedback('Date is incorrect. E.g.: 01/01/2022');
            setHasError(true);
        } else if (!moment(time, 'HH:mm', true).isValid()) {
            setDateFeedback('Time is incorrect. E.g.: 10:20');
            setHasError(true);
        } else if (!validateDate(date, time)) {
            setDateFeedback('Date in past. Choose a future date.');
            setHasError(true);
        }

        save({
            message,
            date,
            time,
        });
    };

    const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
        setMessageError(false);
        setMessageFeedback('');
        setHasError(false);
        setRemainingLength(280 - e.target.textLength);
    };

    const handleDate = (v: string) => {
        setDate(v);
        setDateFeedback('');
        setHasError(false);
    };

    const handleTime = (v: string) => {
        setTime(v);
        setDateFeedback('');
        setHasError(false);
    };

    return (
        <Container>
            <Content>
                <Row>
                    <Title>
                        <Button click={close} icon="close" size="medium" variant="discreet" />
                        <Paragraph size="s16" fontWeight="medium">
                            {title}
                        </Paragraph>
                    </Title>

                    <Button
                        click={handleSave}
                        isDisabled={hasError}
                        icon="tweets"
                        label={saveButtonLabel}
                        size="medium"
                        variant="fill"
                    />
                </Row>
                <Textarea
                    change={(e: ChangeEvent<HTMLTextAreaElement>) => handleMessage(e)}
                    initialValue={initialValues?.message}
                    hasError={messageError}
                    maxLength={280}
                    placeholder={messagePlaceholder}
                />
                <div className="feedbacks right">
                    {messageError ? (
                        <Feedback data-testid="message-feedback" icon="danger" message={messageFeedback} />
                    ) : (
                        <Paragraph size="s12" fontWeight="medium">
                            {remainingLength}
                        </Paragraph>
                    )}
                </div>
                <div className="input-titles">
                    <Paragraph size="s12" fontWeight="medium">
                        {timingLabel}
                    </Paragraph>
                </div>
                <Row>
                    <Input
                        change={(v: string) => handleDate(v)}
                        icon="calendar"
                        initialValue={initialValues?.date}
                        hasError={!!dateFeedback}
                        mask="date"
                        maxLength={10}
                        placeholder="Date"
                    />

                    <Input
                        change={(v: string) => handleTime(v)}
                        icon="clock"
                        initialValue={initialValues?.time}
                        hasError={!!dateFeedback}
                        mask="time"
                        maxLength={5}
                        placeholder="Time"
                    />
                </Row>
                <div className="feedbacks">{dateFeedback && <Feedback icon="danger" message={dateFeedback} />}</div>
                <Timezone>
                    <Icon name="globe" color="#79787C" size="medium" />
                    <Paragraph colorPrimary="brandDarkAlpha60" size="s12" fontWeight="medium">
                        Timezone
                    </Paragraph>
                    <Paragraph colorPrimary="brandDarkAlpha60" size="s12">
                        {timezone}
                    </Paragraph>
                </Timezone>
            </Content>
            <Mask data-testid="mask" onClick={close} />
        </Container>
    );
};
