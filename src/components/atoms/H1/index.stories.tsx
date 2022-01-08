import { Meta, Story } from '@storybook/react/types-6-0';
import { H1 as Component } from './index';

export default {
    title: 'Atoms/H1',
    component: Component,
} as Meta;

const Template: Story = () => <Component />;

export const Default = Template.bind({});
Default.parameters = {
    controls: { hideNoControlsWarning: true },
};
