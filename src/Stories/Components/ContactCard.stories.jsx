import React from 'react';
import ContactCard from '../../Components/ContactCard';
import generateContacts from '../../Tests/Factories/Contacts';

const [contact] = generateContacts(1, 1);

export default {
  title: 'Modal/ContactCard',
  component: ContactCard,
};

const Template = (args) => <ContactCard contact={args.contact} />;

export const Default = Template.bind({});

Default.args = {
  contact,
};
