import userEvent from '@testing-library/user-event';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Template } from '../../../../spec/template';
import { Textarea } from './index';

describe('textarea', () => {
    const onChange = jest.fn();

    const component = (
        <Template>
            <Textarea id="date" change={onChange} maxLength={50} />
        </Template>
    );

    test('should match snapshot', () => {
        const snapshot = create(component);
        expect(snapshot).toMatchSnapshot();
    });

    test('textarea should respect maxLenght', () => {
        render(component);
        const textarea = screen.getByRole('textbox');

        userEvent.type(textarea, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
        expect(textarea).toHaveValue('Lorem ipsum dolor sit amet, consectetur adipiscing');
    });

    test('textarea should change its value on change', () => {
        render(
            <Template>
                <Textarea id="date" change={onChange} />
            </Template>,
        );
        const textarea = screen.getByRole('textbox');

        userEvent.type(textarea, 'My new value');
        expect(textarea).toHaveValue('My new value');
    });

    test('textarea should have initial value', () => {
        render(
            <Template>
                <Textarea id="date" change={onChange} initialValue="Hello World" />
            </Template>,
        );
        const textarea = screen.getByRole('textbox');

        expect(textarea).toHaveValue('Hello World');
    });
});
