import { headerSlice } from '@Store/reducers/HeaderSlice';
import { menuSlice } from '@Store/reducers/MenuSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const About: React.FC = () => {
  const { changeTitleText } = headerSlice.actions;
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitleText('О приложении'));
    dispatch(setIsOpen(false));
  }, []);

  return (
    <>
      <div style={{ marginTop: 80 }}>About</div>
    </>
  );
};

export default About;
