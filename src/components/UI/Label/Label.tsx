import React from 'react';
import cl from './Label.module.css';

interface LabelProps {
  text: string;
  color?: string;
}

enum Colors {
  CRITICAL = 'critical',
  GRAY_STRONG = 'grayStrong',
  GRAY_WEAK = 'grayWeak',
}

const Label: React.FC<LabelProps> = ({ text, color }) => {
  function getColorClassName() {
    switch (color) {
      case Colors.CRITICAL:
        return cl.colorCritical;
      case Colors.GRAY_STRONG:
        return cl.colorGrayStrong;
      case Colors.GRAY_WEAK:
        return cl.colorGrayWeak;
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
