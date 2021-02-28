import React from 'react';
import PropTypes from 'prop-types';

const CountryCheckbox = ({ label, isSelected, onCheckboxChange }) => {
  return (
    <label aria-label={label}>
      {label}
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="ml-1"
      />
    </label>
  );
};

CountryCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
};

export default CountryCheckbox;
