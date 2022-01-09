import { Meta, Story } from '@storybook/react/types-6-0';
import { Icon as Component, IconProps } from './index';

export default {
    title: 'Atoms/UI/Icon',
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
            options: ['small', 'medium'],
        },
    },
} as Meta;

const Template: Story<IconProps> = (args) => <Component {...args} />;

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
