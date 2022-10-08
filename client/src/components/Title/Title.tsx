import React from 'react';
import cl from './Title.module.css';

enum TitleType {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
}

interface TitleProps {
  type?: TitleType;
  text: string;
}

const Title: React.FC<TitleProps> = ({ type, text }) => {
  switch (type) {
    case TitleType.H1:
      return <h1 className={`${cl.title} ${cl.titleH1}`}>{text}</h1>;
    case TitleType.H2:
      return <h2 className={`${cl.title} ${cl.titleH2}`}>{text}</h2>;
    case TitleType.H3:
      return <h3 className={`${cl.title} ${cl.titleH3}`}>{text}</h3>;
    default:
      return <h1 className={`${cl.title} ${cl.titleH1}`}>{text}</h1>;
  }
};

export default Title;
