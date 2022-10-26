import React from 'react';
import cl from './Group.module.css';

interface GroupProps {
  groupName: string;
  totalCards: number;
}

enum GroupNames {
  A = 'a',
  B = 'b',
  C = 'c',
  D = 'd',
  E = 'e',
}

const Group: React.FC<GroupProps> = ({ groupName, totalCards }) => {
  switch (groupName) {
    case GroupNames.A:
      return (
        <span className={`${cl.group} ${cl.firstGroup}`}>
          {groupName.toUpperCase()}: {totalCards}
        </span>
      );
    case GroupNames.B:
      return (
        <span className={`${cl.group} ${cl.secondGroup}`}>
          {groupName.toUpperCase()}: {totalCards}
        </span>
      );
    case GroupNames.C:
      return (
        <span className={`${cl.group} ${cl.thirdGroup}`}>
          {groupName.toUpperCase()}: {totalCards}
        </span>
      );
    case GroupNames.D:
      return (
        <span className={`${cl.group} ${cl.fourthGroup}`}>
          {groupName.toUpperCase()}: {totalCards}
        </span>
      );
    case GroupNames.E:
      return (
        <span className={`${cl.group} ${cl.fifthGroup}`}>
          {groupName.toUpperCase()}: {totalCards}
        </span>
      );
    default:
      return <span></span>;
  }
};

export default Group;
