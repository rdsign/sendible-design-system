import { create } from 'react-test-renderer';
import { Icon } from '.';
import { Template } from '../../../../spec/template';

describe('Icon', () => {
    const component = (
        <Template>
            <Icon name="clock" />
        </Template>
    );

    test('should match snapshot', () => {
        const snapshot = create(component);
        expect(snapshot).toMatchSnapshot();
    });
});
