import { Meta, Story } from '@storybook/react/types-6-0';
import { Feedback as Component, FeedbackProps as ComponentProps } from './index';
import * as icons from '../../atoms/Icon/iconList.exports';

export default {
    title: 'Molecules/Feedback',
    component: Component,
    argTypes: {
        icon: {
            control: 'select',
            options: ['', ...Object.keys(icons)],
        },
        message: {
            control: 'text',
        },
    },
} as Meta;

const Template: Story<ComponentProps> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
    icon: 'danger',
    message: 'This is a generic message.',
};
