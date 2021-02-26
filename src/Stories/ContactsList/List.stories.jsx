import React from 'react';
import generateContacts from '../../Tests/Factories/Contacts';
import List from '../../Components/ContactsList/List';

const contacts = generateContacts(3, 8);

export default {
  title: 'ContactsList/List',
  component: List,
};

const Template = (args) => <List contacts={args.contacts} />;

export const Default = Template.bind({});

Default.args = {
  contacts,
};
