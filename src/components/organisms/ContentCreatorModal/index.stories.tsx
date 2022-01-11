import { Meta, Story } from '@storybook/react/types-6-0';
import { ContentCreatorModal as Component, ContentCreatorModalProps as ComponentProps } from './index';

export default {
    title: 'Organisms/ContentCreatorModal',
    component: Component,
    argTypes: {
        initialValues: {
            message: {
                control: 'text',
            },
            date: {
                control: 'text',
            },
            time: {
                control: 'text',
            },
        },
        messagePlaceholder: {
            control: 'text',
        },
        saveButtonLabel: {
            control: 'text',
        },
        timingLabel: {
            control: 'text',
        },
        title: {
            control: 'text',
        },
        close: { action: 'close' },
        save: { action: 'save' },
    },
} as Meta;

const Template: Story<ComponentProps> = (args) => <Component {...args} />;

export const DefaultEmpty = Template.bind({});
DefaultEmpty.args = {
    messagePlaceholder: 'Enter your caption here...',
    saveButtonLabel: 'Tweet',
    timingLabel: 'When',
    title: 'Schedule',
};

export const DefaultFilled = Template.bind({});
DefaultFilled.args = {
    initialValues: {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices aliquet risus et dapibus.',
        date: '22/01/2022',
        time: '18:15',
    },
    messagePlaceholder: 'Enter your caption here...',
    saveButtonLabel: 'Tweet',
    timingLabel: 'When',
    title: 'Schedule',
};
