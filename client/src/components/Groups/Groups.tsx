import React from 'react';
import { IGroup } from 'models/IGroup';
import cl from './Groups.module.css';
import GroupLabel from 'components/GroupLabel';

interface GroupsProps {
  groups: IGroup[];
}

const Groups: React.FC<GroupsProps> = ({ groups }) => {
  return (
    <div className={cl.wrapper}>
      <GroupLabel key={1} name={"a"} totalCards={500} />
      <GroupLabel key={2} name={"b"} totalCards={400} />
      <GroupLabel key={3} name={"c"} totalCards={300} />
      <GroupLabel key={4} name={"d"} totalCards={200} />
      <GroupLabel key={5} name={"e"} totalCards={100} />
    </div>
  );
};

export default Groups;
