import { Meta, Story } from '@storybook/react/types-6-0';
import { ContentListItem as Component, ContentListItemProps as ComponentProps } from './index';

export default {
    title: 'Organisms/ContentListItem',
    component: Component,
    argTypes: {
        message: {
            control: 'text',
        },
        socialMedia: {
            control: 'radio',
            options: ['twitter'],
        },
        scheduledDate: {
            control: 'text',
        },
        scheduledTime: {
            control: 'text',
        },
        edit: { action: 'edit' },
        exclude: { action: 'exclude' },
    },
} as Meta;

const Template: Story<ComponentProps> = (args) => (
    <div style={{ maxWidth: '400px' }}>
        <Component {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    message: 'This assignment is awesome! 😁😁😁',
    socialMedia: 'twitter',
    scheduledDate: '25/12/2021',
    scheduledTime: '11:05',
};
