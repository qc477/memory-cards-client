import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { headerSlice } from '../store/reducers/HeaderSlice';
import { logoSlice } from '../store/reducers/LogoSlice';

const Settings: React.FC = () => {
  const { toggle } = headerSlice.actions;
  const { changeTitle } = logoSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggle(true));
    dispatch(changeTitle('Настройки'));
    return () => {
      dispatch(toggle(false));
    };
  }, []);

  return (
    <>
      <div style={{ marginTop: 80 }}>Settings</div>
    </>
  );
};

export default Settings;
