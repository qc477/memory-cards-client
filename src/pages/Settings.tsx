import React, { useEffect } from 'react';
import { headerSlice } from '../store/reducers/HeaderSlice';
import { useDispatch } from 'react-redux';

const Settings: React.FC = () => {
  const { toggle } = headerSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggle(true));
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
