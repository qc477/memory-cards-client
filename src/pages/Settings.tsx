import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { headerSlice } from '../store/reducers/HeaderSlice';

const Settings: React.FC = () => {
  const { changeTitleText } = headerSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitleText('Настройки'));
  }, []);

  return (
    <>
      <div style={{ marginTop: 80 }}>Settings</div>
    </>
  );
};

export default Settings;
