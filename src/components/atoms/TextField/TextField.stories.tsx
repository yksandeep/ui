import { TextField } from './index';

export default {
  title: 'Components/Atoms/TextField',
  component: TextField,
  parameters: {
    actions: {
      handles: ['click', 'hover'],
    },
  },
};

const Template = (args) => ({
  //👇 Your template goes here
});

const UsernameTextField = Template.bind({});

UsernameTextField.args = {
  placeholder: 'Username',
};

export const Username = {
  args: {
    placeholder: 'Username',
    type: 'text',
  },
};
export const password = {
  args: {
    placeholder: 'Password',
    type: 'password',
  },
};
