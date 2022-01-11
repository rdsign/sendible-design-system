import { Meta, Story } from '@storybook/react/types-6-0';
import { Button as Component, ButtonProps as ComponentProps } from './index';
import * as icons from '../../atoms/Icon/iconList.exports';

export default {
    title: 'Molecules/Button',
    component: Component,
    argTypes: {
        variant: {
            control: 'radio',
            options: ['discreet', 'fill', 'floating'],
        },
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
        },
        isDisabled: { control: 'boolean' },
        icon: {
            control: 'select',
            options: ['', ...Object.keys(icons)],
        },
        label: { control: 'text' },
        click: { action: 'clicked' },
    },
} as Meta;

const Template: Story<ComponentProps> = (args) => <Component {...args} />;

export const ButtonWithIconFillLarge = Template.bind({});
ButtonWithIconFillLarge.args = {
    variant: 'fill',
    size: 'large',
    icon: 'tweets',
    label: 'Label',
};

export const ButtonWithIconFillMedium = Template.bind({});
ButtonWithIconFillMedium.args = {
    variant: 'fill',
    size: 'medium',
    icon: 'tweets',
    label: 'Label',
};

export const ButtonWithIconFillSmall = Template.bind({});
ButtonWithIconFillSmall.args = {
    variant: 'fill',
    size: 'small',
    icon: 'tweets',
    label: 'Label',
};

export const ButtonWithIconDiscreetLarge = Template.bind({});
ButtonWithIconDiscreetLarge.args = {
    variant: 'discreet',
    size: 'large',
    icon: 'tweets',
};

export const ButtonWithIconDiscreetMedium = Template.bind({});
ButtonWithIconDiscreetMedium.args = {
    variant: 'discreet',
    size: 'medium',
    icon: 'tweets',
};

export const ButtonWithIconDiscreetSmall = Template.bind({});
ButtonWithIconDiscreetSmall.args = {
    variant: 'discreet',
    size: 'small',
    icon: 'tweets',
};

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
    variant: 'fill',
    size: 'large',
    icon: 'tweets',
    label: 'Label',
    isDisabled: true,
};

export const ButtonFloatingLarge = Template.bind({});
ButtonFloatingLarge.args = {
    variant: 'floating',
    size: 'large',
    icon: 'tweets',
};
