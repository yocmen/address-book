import React from 'react';
import generateUsers from '../../Tests/Factories/Users';
import List from '../../Components/UsersList/List';

const users = generateUsers(3, 8);

export default {
  title: 'UserList/List',
  component: List,
};

const Template = (args) => <List users={args.users} />;

export const Default = Template.bind({});

Default.args = {
  users,
};
