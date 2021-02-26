import React from 'react';
import generateContacts from '../../Tests/Factories/Contacts';
import Item from '../../Components/ContactsList/Item';

const [contact] = generateContacts(1, 1);

export default {
  title: 'ContactsList/Item',
  component: Item,
};

const Template = (args) => <Item contact={args.contact} />;

export const Default = Template.bind({});

Default.args = {
  contact,
};
