import { FC, ChangeEvent, useEffect, useState, useRef } from 'react';
import { Container } from './index.styles';

export interface TextareaProps {
    /**
     * Send click event to parent (Required)
     */
    change: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * Controls error visual feedback. (Optional | Default: false)
     */
    hasError?: boolean;
    /**
     * Id attribute. (Optional)
     */
    id?: string;
    /**
     * Initial value. (Optional)
     */
    initialValue?: string;
    /**
     * Textarea max length. (Optional)
     */
    maxLength?: number;
    /**
     * Placeholder text. (Optional)
     */
    placeholder?: string;
}

export const Textarea: FC<TextareaProps> = (props) => {
    const { change, id, initialValue, maxLength, placeholder } = props;
    const [height, setHeight] = useState<number>(0);

    const ref = useRef<any>(null);

    const handleHeight = (scrollHeight: number) => {
        if (scrollHeight === height) return;
        setHeight(scrollHeight);
    };

    useEffect(() => {
        initialValue && (ref.current.value = initialValue);
    }, [initialValue]);

    useEffect(() => {
        setHeight(ref.current.scrollHeight);
    }, []);

    return (
        <Container
            id={id}
            maxLength={maxLength}
            placeholder={placeholder}
            ref={ref}
            currentHeight={height}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                change(e);
                handleHeight(e.target.scrollHeight);
            }}
            {...props}
        />
    );
};
