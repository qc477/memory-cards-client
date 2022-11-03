import React from 'react';
import cl from './Label.module.css';

interface LabelProps {
  text: string;
  color?: string;
}

enum Colors {
  CRITICAL = 'critical',
  SUCCESS = 'success',
  GRAY = 'gray',
}

const Label: React.FC<LabelProps> = ({ text, color }) => {
  function getColorClassName() {
    switch (color) {
      case Colors.CRITICAL:
        return cl.colorCritical;
      case Colors.SUCCESS:
        return cl.colorSuccess;
      case Colors.GRAY:
        return cl.colorGray;
      default:
        return '';
    }
  }

  return (
    <div>
      <span className={`${cl.label} ${getColorClassName()}`}>{text}</span>
    </div>
  );
};

export default Label;
