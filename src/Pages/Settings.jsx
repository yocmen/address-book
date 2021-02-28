import React from 'react';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import Layout from '../Components/Layout';
import NavButton from '../Components/NavButton';
import SettingsForm from '../Components/SettingsForm';

const SettingsPage = () => {
  return (
    <Layout>
      <div>
        <div className="flex items-center space-x-4 pt-4">
          <NavButton to="/">
            <span className="text-sm mr-1">
              <FaAngleDoubleLeft />
            </span>
            Home
          </NavButton>
          <div className="flex-1 flex items-center justify-center bg-gray-200 rounded h-12">
            <h1>Settings page</h1>
          </div>
        </div>
        <div className="mt-8 border border-gray-300 rounded p-4">
          <SettingsForm />
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;
