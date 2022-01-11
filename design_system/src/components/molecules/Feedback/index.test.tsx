import { create } from 'react-test-renderer';
import { Feedback } from '.';
import { Template } from '../../../../spec/template';

describe('Feedback', () => {
    const component = (
        <Template>
            <Feedback icon="danger" message="This is a generic message." />
        </Template>
    );

    test('should match snapshot', () => {
        const snapshot = create(component);
        expect(snapshot).toMatchSnapshot();
    });
});
