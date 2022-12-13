import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Icons from '@/components/ui/Icons';
import Text from '@/components/ui/Text';
import { useAppSelector } from '@/hooks/redux';
import { deckManagementSlice } from '@/store/reducers/DeckManagementSlice';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import cl from './CardsPreview.module.css';

const CardsPreview: React.FC = () => {
  const { isReadingFaile, cards } = useAppSelector((state) => state.deckManagementReducer);
  const { setTotalCards, removeCard } = deckManagementSlice.actions;
  const dispatch = useDispatch();

  useMemo(() => dispatch(setTotalCards(cards.length)), [cards]);

  const remove = (cardId: number) => {
    dispatch(removeCard(cardId));
  };

  return (
    <div className={cl.cardsPreview}>
      {isReadingFaile && <p>Reading file...</p>}
      {cards.map((card) => (
        <Card key={card.id}>
          <div className={cl.wrapper}>
            <div className={cl.wrapperItem}>
              <Text>{card.question}</Text>
            </div>
            <span className={cl.separator}></span>
            <div className={cl.wrapperItem}>
              <Text>{card.answer}</Text>
            </div>
            <div className={cl.buttonsWrapper}>
              <Button className={cl.buttonEdit} variant='text' color='gray' startIcon={<Icons name='edit' />}>
                Редактировать
              </Button>
              <Button
                className={cl.buttonDelete}
                variant='text'
                color='critic'
                startIcon={<Icons name='delete' />}
                onClick={() => remove(card.id)}
              >
                Удалить
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardsPreview;
