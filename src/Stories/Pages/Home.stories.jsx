import React from 'react';
import fetchMock from 'fetch-mock';
import generateUsers from '../../Tests/Factories/Users';
import HomePage from '../../Pages/Home';

const users = generateUsers(3, 8);

export default {
  title: 'Pages/Home',
  component: HomePage,
};

const Template = () => {
  fetchMock
    .restore()
    .mock(`begin:${process.env.STORYBOOK_USERS_API}`, { results: users });
  return <HomePage />;
};

export const Default = Template.bind({});
