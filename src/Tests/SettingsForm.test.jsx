import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, renderWithRouter, screen, fireEvent } from './test-utils';
import SettingsForm from '../Components/SettingsForm';
import SettingsPage from '../Pages/Settings';

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
    },
    writable: true,
  });
});

describe('Settings form component', () => {
  it('shows checkbox for country CH', () => {
    render(<SettingsForm />);

    const checkForCH = screen.getByRole('checkbox', { name: 'CH' });

    expect(checkForCH).toBeInTheDocument();
  });

  it('shows checkbox for country ES', () => {
    render(<SettingsForm />);

    const checkForCH = screen.getByRole('checkbox', { name: 'ES' });

    expect(checkForCH).toBeInTheDocument();
  });

  it('shows checkbox for country FR', () => {
    render(<SettingsForm />);

    const checkForCH = screen.getByRole('checkbox', { name: 'FR' });

    expect(checkForCH).toBeInTheDocument();
  });

  it('shows checkbox for country GB', () => {
    render(<SettingsForm />);

    const checkForCH = screen.getByRole('checkbox', { name: 'GB' });

    expect(checkForCH).toBeInTheDocument();
  });

  it('Should call localStorage', async () => {
    renderWithRouter(<SettingsPage />);

    const checkForCH = screen.getByRole('checkbox', { name: 'CH' });

    fireEvent.click(checkForCH);

    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      'abCountryFilter',
      JSON.stringify({
        CH: true,
        ES: false,
        FR: false,
        GB: false,
      })
    );
  });
});
