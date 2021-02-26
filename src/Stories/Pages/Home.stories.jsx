import React from 'react';
import fetchMock from 'fetch-mock';
import generateContacts from '../../Tests/Factories/Contacts';
import HomePage from '../../Pages/Home';

const contacts = generateContacts(3, 8);

export default {
  title: 'Pages/Home',
  component: HomePage,
};

const Template = () => {
  fetchMock
    .restore()
    .mock(`begin:${process.env.STORYBOOK_USERS_API}`, { results: contacts });
  return <HomePage />;
};

export const Default = Template.bind({});
