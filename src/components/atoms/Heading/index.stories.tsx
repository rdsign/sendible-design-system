import { Meta, Story } from '@storybook/react/types-6-0';
import { Heading as Component, HeadingProps } from './index';
import { brandColors, sizings } from '../../../theme';

export default {
    title: 'Atoms/Typography/Heading',
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
        size: {
            control: 'select',
            options: sizings,
        },
        name: {
            control: {
                disable: true,
            },
        },
    },
} as Meta;

const Template: Story<HeadingProps> = (args) => <Component {...args}>Lorem ipsum dolor sit amet</Component>;
const TemplateHighlighted: Story<HeadingProps> = (args) => (
    <Component {...args}>
        Lorem ipsum
        <br />
        dolor sit amet
        <br />
        <i>Highlighted</i>
    </Component>
);

export const H1Large = Template.bind({});
H1Large.args = {
    name: 'h1',
    size: 's80',
};

export const H1Medium = Template.bind({});
H1Medium.args = {
    name: 'h1',
    size: 's64',
};

export const H1Small = Template.bind({});
H1Small.args = {
    name: 'h1',
    size: 's32',
};

export const H2Large = Template.bind({});
H2Large.args = {
    name: 'h2',
    size: 's64',
};

export const H2Medium = Template.bind({});
H2Medium.args = {
    name: 'h2',
    size: 's32',
};

export const H2Small = Template.bind({});
H2Small.args = {
    name: 'h2',
    size: 's20',
};

export const h4Large = Template.bind({});
h4Large.args = {
    name: 'h4',
    size: 's32',
};

export const h4Medium = Template.bind({});
h4Medium.args = {
    name: 'h4',
    size: 's20',
};

export const h4Small = Template.bind({});
h4Small.args = {
    name: 'h4',
    size: 's18',
};

export const H1Highlighted = TemplateHighlighted.bind({});
H1Highlighted.args = {
    name: 'h1',
    size: 's80',
};

export const H1HighlightedDarkMode = TemplateHighlighted.bind({});
H1HighlightedDarkMode.args = {
    name: 'h1',
    size: 's80',
    colorPrimary: 'brandWhite',
};
H1HighlightedDarkMode.parameters = {
    backgrounds: { default: 'Dark' },
};
