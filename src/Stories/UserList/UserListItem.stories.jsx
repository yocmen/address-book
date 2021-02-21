import React from 'react';
import generateUsers from '../../Tests/Factories/Users';
import UserListItem from '../../Components/UsersListItem';

const [user] = generateUsers(1, 1);

export default {
  title: 'UserList/Item',
  component: UserListItem,
};

const Template = (args) => <UserListItem user={args.user} />;

export const Default = Template.bind({});

Default.args = {
  user,
};
