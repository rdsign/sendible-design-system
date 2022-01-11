import { Meta, Story } from '@storybook/react/types-6-0';
import { Textarea as Component, TextareaProps as ComponentProps } from './index';

export default {
    title: 'Atoms/Textarea',
    component: Component,
    argTypes: {
        hasError: { control: 'boolean' },
        id: {
            control: 'text',
        },
        initialValue: {
            control: 'text',
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

export const TextareaDefault = Template.bind({});
TextareaDefault.args = {
    initialValue: 'Hello world! 🖖🖖🖖',
    maxLength: 200,
    placeholder: 'Insert your text',
};

export const TextareaHasError = Template.bind({});
TextareaHasError.args = {
    initialValue: 'Hello world! 🖖🖖🖖',
    maxLength: 200,
    placeholder: 'Insert your text',
    hasError: true,
};
