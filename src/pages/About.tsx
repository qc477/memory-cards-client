import React from 'react';
import Header from '../components/Header';
import Logo from '../components/Logo/Logo';

const About: React.FC = () => {
  return (
    <>
      <Header>
        <Logo />
      </Header>
      <div style={{ marginTop: 80 }}>About</div>
    </>
  );
};

export default About;
