import { create } from 'react-test-renderer';
import { Paragraph } from '.';
import { Template } from '../../../../spec/template';

describe('Paragraph', () => {
    const component = (
        <Template>
            <Paragraph size="s20">
                Sendible<i> Rocks!</i>
            </Paragraph>
        </Template>
    );

    test('should match snapshot', () => {
        const snapshot = create(component);
        expect(snapshot).toMatchSnapshot();
    });
});
