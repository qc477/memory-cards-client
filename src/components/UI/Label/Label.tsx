import clsx from 'clsx';
import React from 'react';
import cl from './Label.module.css';

type Color = 'default' | 'critical' | 'success' | 'warning';

interface LabelProps {
  text: string;
  color?: Color;
}

const Label: React.FC<LabelProps> = ({ text, color = 'default' }) => {
  const styles = clsx(cl.label, {
    [cl.default]: color === 'default',
    [cl.critical]: color === 'critical',
    [cl.warning]: color === 'warning',
    [cl.success]: color === 'success',
  });

  return (
    <div>
      <span className={styles}>{text}</span>
    </div>
  );
};

export default Label;
