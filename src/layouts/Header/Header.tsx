import IconButton from '@/components/ui/IconButton';
import Icons from '@/components/ui/Icons';
import Title from '@/components/ui/Title';
import { useAppSelector } from '@/hooks/redux';
import { menuSlice } from '@/store/reducers/MenuSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const { titleText, isVisibleAddButton } = useAppSelector((state) => state.headerReducer);
  const { isScrollY } = useAppSelector((state) => state.appReducer);
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function openMenu(): void {
    dispatch(setIsOpen(true));
  }

  function moveToPage() {
    navigate('new-deck');
  }

  return (
    <header className={isScrollY ? `${styles.header} ${styles.scroll}` : styles.header}>
      <div className={styles.body}>
        <IconButton color='faintStrong' onClick={openMenu}>
          <Icons name='menu' />
        </IconButton>
        <Title className={styles.title}>{titleText}</Title>
        {isVisibleAddButton ? (
          <IconButton color='faintStrong' onClick={moveToPage}>
            <Icons name='add' />
          </IconButton>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
