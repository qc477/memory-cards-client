import { headerSlice } from '@Store/reducers/HeaderSlice';
import { menuSlice } from '@Store/reducers/MenuSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Settings: React.FC = () => {
  const { changeTitleText } = headerSlice.actions;
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitleText('Настройки'));
    dispatch(setIsOpen(false));
  }, []);

  return (
    <>
      <div style={{ marginTop: 80 }}>Settings</div>
    </>
  );
};

export default Settings;
