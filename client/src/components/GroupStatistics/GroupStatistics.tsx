import React from 'react';
import { IGroupLabel } from 'models/IGroupLabel';
import cl from './GroupStatistics.module.css';
import Group from 'components/Group/Group';

interface GroupStatisticsProps {
  labels: IGroupLabel[];
}

const GroupStatistics: React.FC<GroupStatisticsProps> = ({ labels }) => {
  return (
    <div className={cl.wrapper}>
      {labels.map((label) => (
        <Group key={label.id} groupName={label.groupName} totalCards={label.totalCards} />
      ))}
    </div>
  );
};

export default GroupStatistics;
