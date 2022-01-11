import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { Template } from '../../../../spec/template';
import { ContentCreatorModal } from '.';

describe('ContentCreatorModal', () => {
    const onClose = jest.fn();
    const onSave = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    const component = (
        <Template>
            <ContentCreatorModal
                close={onClose}
                messagePlaceholder="Type the"
                save={onSave}
                saveButtonLabel="save"
                timingLabel="When"
                title="Schedule"
                initialValues={{
                    message: 'This is the message text',
                    date: '20/04/2023',
                    time: '10:20',
                }}
            />
        </Template>
    );

    test('should match snapshot', () => {
        const snapshot = create(component);
        expect(snapshot).toMatchSnapshot();
    });

    test('should call onClose upon click on mask and close button', () => {
        render(component);
        const [close] = screen.getAllByRole('button');
        const mask = screen.getByTestId('mask');

        userEvent.click(close);
        userEvent.click(mask);
        expect(onClose).toHaveBeenCalledTimes(2);
    });

    test('should call onSave upon click on save button', () => {
        render(component);
        const [, save] = screen.getAllByRole('button');

        userEvent.click(save);
        expect(onSave).toHaveBeenCalledTimes(1);
    });

    // I'm running out of time, so i decided to leave the other tests behind to finish the front application.
    // Of course these tests can be improved, but due to the time i have to code i choose to focus on finishing the application.
});
