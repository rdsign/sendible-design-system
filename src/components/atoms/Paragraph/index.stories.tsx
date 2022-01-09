import { Meta, Story } from '@storybook/react/types-6-0';
import { Paragraph as Component, ParagraphProps } from './index';
import { brandColors } from '../../../theme';

export default {
    title: 'Atoms/Typography/Paragraph',
    component: Component,
    argTypes: {
        colorPrimary: {
            control: 'select',
            options: brandColors,
        },
        colorSecondary: {
            control: 'select',
            options: brandColors,
        },
        fontWeight: {
            control: 'radio',
            options: ['regular', 'medium', 'semiBold'],
        },
        size: {
            control: 'radio',
            options: ['s20', 's18', 's16', 's12'],
        },
    },
} as Meta;

const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula, felis vitae vestibulum viverra, ex quam tempor tellus.';

const Template: Story<ParagraphProps> = (args) => <Component {...args}>{text}</Component>;
const TemplateDecorated: Story<ParagraphProps> = (args) => (
    <Component {...args}>
        {text}
        <i> Enim augue vehicula lorem </i>
        in aliquam, mi nec ullamcorper ultricies.
        <br />
        <a href="#test"> Quis sollicitudin augue urna a elit.</a>
        <b> In aliquam, mi nec ullamcorper ultricies.</b>
    </Component>
);

export const P = Template.bind({});
P.args = {
    size: 's20',
};
export const PDecorated = TemplateDecorated.bind({});
PDecorated.args = {
    size: 's20',
};
