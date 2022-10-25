import React from 'react';
import { IGroupLabel } from 'models/IGroupLabel';
import cl from './GroupStatistics.module.css';

interface GroupStatisticsProps {
  labels: IGroupLabel[];
}

const GroupStatistics: React.FC<GroupStatisticsProps> = ({ labels }) => {
  return (
    <div className={cl.wrapper}>
      {labels.map((label) => (
        <p key={label.id}>
          {label.groupName.toUpperCase()}: {label.totalCards}
        </p>
      ))}
    </div>
  );
};

export default GroupStatistics;
