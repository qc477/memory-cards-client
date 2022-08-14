import React, { useEffect } from 'react';
import { headerSlice } from '../store/reducers/HeaderSlice';
import { useDispatch } from 'react-redux';

const About: React.FC = () => {
  const { toggle } = headerSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggle(true));
    return () => {
      dispatch(toggle(false));
    }
  });

  return (
    <>
      <div style={{ marginTop: 80 }}>About</div>
    </>
  );
};

export default About;
