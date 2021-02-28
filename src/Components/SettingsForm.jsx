import React, { useState, useContext } from 'react';
import CountryCheckbox from './CountryCheckbox';
import { SET_COUNTRY_FILTER } from '../Context/Constants/Contacts';
import { GlobalContext } from '../Context/Provider';

const COUNTRIES = ['CH', 'ES', 'FR', 'GB'];

const SettingsForm = () => {
  const { contactsState, contactsDispatch } = useContext(GlobalContext);
  const { countryFilter } = contactsState;

  const [checkboxes, setCheckboxes] = useState(() => {
    if (Object.keys(countryFilter).length > 0) {
      return countryFilter;
    }

    return COUNTRIES.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {}
    );
  });

  const handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;

    setCheckboxes((prevState) => {
      const newValues = {
        ...prevState,
        [name]: !prevState[name],
      };

      contactsDispatch({ type: SET_COUNTRY_FILTER, payload: newValues });
      return newValues;
    });
  };

  const createCheckbox = (option) => (
    <CountryCheckbox
      label={option}
      isSelected={checkboxes[option]}
      onCheckboxChange={handleCheckboxChange}
      key={option}
    />
  );

  return (
    <form action="">
      <div className="flex space-x-2 flex-col md:flex-row">
        <span className="text-center">Filter contacts by nationalities:</span>
        <div className="flex justify-center space-x-2">
          {COUNTRIES.map(createCheckbox)}
        </div>
      </div>
    </form>
  );
};

export default SettingsForm;
