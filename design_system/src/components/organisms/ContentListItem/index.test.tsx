import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { ContentListItem } from '.';
import { Template } from '../../../../spec/template';

describe('ContentListItem', () => {
    const onEdit = jest.fn();
    const onExclude = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    const component = (
        <Template>
            <ContentListItem
                message="This assignment alksj lsakjd alsjkd alksjd  is awesome! 😁😁😁"
                socialMedia="twitter"
                scheduledDate="25/12/2021"
                scheduledTime="11:05"
                edit={onEdit}
                exclude={onExclude}
            />
        </Template>
    );

    test('should match snapshot', () => {
        const snapshot = create(component);
        expect(snapshot).toMatchSnapshot();
    });

    test('should call onEdit and onExlude upon click', () => {
        render(component);
        const [edit, exclude] = screen.getAllByRole('button');

        userEvent.click(edit);
        expect(onEdit).toHaveBeenCalledTimes(1);

        userEvent.click(exclude);
        expect(onExclude).toHaveBeenCalledTimes(1);
    });
});
