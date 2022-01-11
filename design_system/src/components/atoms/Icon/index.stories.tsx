import { Meta, Story } from '@storybook/react/types-6-0';
import { Icon as Component, IconProps as ComponentProps } from './index';

export default {
    title: 'Atoms/Icon',
    component: Component,
    argTypes: {
        color: {
            control: 'color',
        },
        name: {
            control: 'select',
            options: ['calendar', 'clock', 'close', 'danger', 'edit', 'globe', 'trash', 'tweets', 'twitter'],
        },
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
        },
    },
} as Meta;

const Template: Story<ComponentProps> = (args) => <Component {...args} />;

export const IconSmall = Template.bind({});
IconSmall.args = {
    name: 'clock',
    size: 'small',
};

export const IconMedium = Template.bind({});
IconMedium.args = {
    name: 'calendar',
    size: 'medium',
};

export const IconLarge = Template.bind({});
IconLarge.args = {
    name: 'globe',
    size: 'large',
};
