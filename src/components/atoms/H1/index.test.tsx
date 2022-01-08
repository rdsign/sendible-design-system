import { create } from 'react-test-renderer';
import { H1 } from './index';

describe('Icon', () => {
    const component = <H1 />;

    test('should match snapshot', () => {
        const snapshot = create(component);
        expect(snapshot).toMatchSnapshot();
    });
});
