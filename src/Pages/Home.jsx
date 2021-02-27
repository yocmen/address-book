import React from 'react';
import Layout from '../Components/Layout';
import ContactsList from '../Components/ContactsList/index';
import SearchBar from '../Components/SearchBar';
import Button from '../Components/Button';

const HomePage = () => {
  return (
    <Layout>
      <div className="w-full fixed bg-white left-0">
        <div className=" p-4 flex items-center space-x-4  lg:w-1/2 lg:mx-auto">
          <Button
            className="text-gray-800 h-12 px-4"
            onClick={() => {
              return false;
            }}
          >
            Settings
          </Button>
          <div className="flex-1">
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="pt-24">
        <ContactsList />
      </div>
    </Layout>
  );
};

export default HomePage;
