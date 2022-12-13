import Icons from '@/components/ui/Icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

enum Path {
  DECKS = 'decks',
  NEW_DECK = 'new-deck',
  SOURCE_CODE = 'https://github.com/qc477/memory-cards-client',
}

const Navigation: React.FC = () => {
  const getClassName = (isActive: boolean): string => {
    if (isActive) return `${styles.link} ${styles.active}`;
    return styles.link;
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to={Path.DECKS} className={({ isActive }) => getClassName(isActive)}>
            <span className={styles.iconWrapper}>
              <Icons className={styles.iconCircle} name='circle' width='16' height='16' />
            </span>
            Колоды
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to={Path.NEW_DECK} className={({ isActive }) => getClassName(isActive)}>
            <span className={styles.iconWrapper}>
              <Icons className={styles.iconCircle} name='circle' width='16' height='16' />
            </span>
            Создать колоду
          </NavLink>
        </li>
        <li className={styles.item}>
          <a href={Path.SOURCE_CODE} className={styles.link}>
            <Icons className={styles.icon} name='code' width='28' height='28' />
            Исходный код
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
