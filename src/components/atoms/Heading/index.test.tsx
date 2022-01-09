import { create } from 'react-test-renderer';
import { Heading } from '.';
import { Template } from '../../../../spec/template';

describe('Icon', () => {
    const component = (
        <Template>
            <Heading name="h1" size="s80">
                Sendible<i> Rocks!</i>
            </Heading>
        </Template>
    );

    test('should match snapshot', () => {
        const snapshot = create(component);
        expect(snapshot).toMatchSnapshot();
    });
});
