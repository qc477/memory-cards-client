import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { headerSlice } from '../store/reducers/HeaderSlice';
import { appTitleSlice } from '../store/reducers/AppTitleSlice';

const About: React.FC = () => {
  const { toggle } = headerSlice.actions;
  const { changeTitle } = appTitleSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggle(true));
    dispatch(changeTitle('О приложении'));
    return () => {
      dispatch(toggle(false));
    };
  }, []);

  return (
    <>
      <div style={{ marginTop: 80 }}>About</div>
    </>
  );
};

export default About;
