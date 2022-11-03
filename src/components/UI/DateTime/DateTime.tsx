import React from 'react';
import cl from './DateTime.model.css';

interface DateTimeProps {
  dateTime: string;
}

const DateTime: React.FC<DateTimeProps> = ({ dateTime }) => {
  return (
    <time className={cl.dateTime} dateTime={dateTime}>
      {dateTime}
    </time>
  );
};

export default DateTime;
