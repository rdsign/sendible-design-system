import { Meta, Story } from '@storybook/react/types-6-0';
import { Input as Component, InputProps as ComponentProps } from './index';
import * as icons from '../../atoms/Icon/iconList.exports';

export default {
    title: 'Molecules/Input',
    component: Component,
    argTypes: {
        hasError: { control: 'boolean' },
        icon: {
            control: 'select',
            options: ['', ...Object.keys(icons)],
        },
        id: {
            control: 'text',
        },
        initialValue: {
            control: 'text',
        },
        mask: {
            control: 'select',
            options: ['', 'date', 'time'],
        },
        maxLength: {
            control: 'number',
        },
        placeholder: {
            control: 'text',
        },
        change: { action: 'changed' },
    },
} as Meta;

const Template: Story<ComponentProps> = (args) => <Component {...args} />;

export const InputDate = Template.bind({});
InputDate.args = {
    initialValue: '12/12/2030',
    icon: 'calendar',
    mask: 'date',
    maxLength: 10,
    placeholder: 'Date',
};

export const InputTime = Template.bind({});
InputTime.args = {
    initialValue: '12:30',
    icon: 'clock',
    mask: 'time',
    maxLength: 5,
    placeholder: 'Time',
};

export const InputHasError = Template.bind({});
InputHasError.args = {
    initialValue: 'Just another input',
    placeholder: 'Insert your text',
    hasError: true,
};
