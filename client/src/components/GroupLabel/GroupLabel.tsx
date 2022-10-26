import React from 'react';
import cl from './GroupLabel.module.css';

interface GroupLabelProps {
  name: string;
  totalCards: number;
}

enum GroupNames {
  A = 'a',
  B = 'b',
  C = 'c',
  D = 'd',
  E = 'e',
}

const GroupLabel: React.FC<GroupLabelProps> = ({ name, totalCards }) => {
  switch (name) {
    case GroupNames.A:
      return (
        <span className={`${cl.group} ${cl.firstGroup}`}>
          {name.toUpperCase()}: {totalCards}
        </span>
      );
    case GroupNames.B:
      return (
        <span className={`${cl.group} ${cl.secondGroup}`}>
          {name.toUpperCase()}: {totalCards}
        </span>
      );
    case GroupNames.C:
      return (
        <span className={`${cl.group} ${cl.thirdGroup}`}>
          {name.toUpperCase()}: {totalCards}
        </span>
      );
    case GroupNames.D:
      return (
        <span className={`${cl.group} ${cl.fourthGroup}`}>
          {name.toUpperCase()}: {totalCards}
        </span>
      );
    case GroupNames.E:
      return (
        <span className={`${cl.group} ${cl.fifthGroup}`}>
          {name.toUpperCase()}: {totalCards}
        </span>
      );
    default:
      return <span></span>;
  }
};

export default GroupLabel;
