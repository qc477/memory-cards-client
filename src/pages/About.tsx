import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { headerSlice } from '../store/reducers/HeaderSlice';

const About: React.FC = () => {
  const { changeTitleText } = headerSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitleText('О приложении'));
  }, []);

  return (
    <>
      <div style={{ marginTop: 80 }}>About</div>
    </>
  );
};

export default About;
