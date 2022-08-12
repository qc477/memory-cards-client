import React from 'react';
import Header from '../components/Header';
import Logo from '../components/Logo/Logo';

const Settings: React.FC = () => {
  return (
    <>
      <Header>
        <Logo />
        <div style={{ marginTop: 80 }}>Settings</div>
      </Header>
    </>
  );
};

export default Settings;
