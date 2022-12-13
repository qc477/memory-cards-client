import { headerSlice } from '@/store/reducers/HeaderSlice';
import { menuSlice } from '@/store/reducers/MenuSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FormCreatingDeck from './components/FormCreatingDeck';
import FormCreatingCard from './components/FormCreatingCard';
import CardsPreview from './components/CardsPreview';
import styles from './NewDeck.modules.css';

const NewDeck: React.FC = () => {
  const { changeTitleText } = headerSlice.actions;
  const { setIsOpen } = menuSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitleText('Новая колода'));
    dispatch(setIsOpen(false));
  }, []);

  return (
    <main className={styles.main}>
      <FormCreatingDeck />
      <FormCreatingCard />
      <CardsPreview />
    </main>
  );
};
export default NewDeck;
