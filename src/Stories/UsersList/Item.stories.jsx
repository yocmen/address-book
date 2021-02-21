import React from 'react';
import generateUsers from '../../Tests/Factories/Users';
import Item from '../../Components/UsersList/Item';

const [user] = generateUsers(1, 1);

export default {
  title: 'UserList/Item',
  component: Item,
};

const Template = (args) => <Item user={args.user} />;

export const Default = Template.bind({});

Default.args = {
  user,
};
