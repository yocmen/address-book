import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import SettingsPage from '../../Pages/Settings';

export default {
  title: 'Pages/Settings',
  component: SettingsPage,
};

const Template = () => {
  return (
    <MemoryRouter>
      <SettingsPage />
    </MemoryRouter>
  );
};

export const Default = Template.bind({});
