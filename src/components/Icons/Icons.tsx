import React from 'react';
import IconsSVG from '../../assets/icons.svg';

interface IconsProps {
  className?: string;
  name: string;
  width?: string;
  height?: string;
}

const Icons: React.FC<IconsProps> = ({ className, name, width = '32', height = '32' }) => {
  return (
    <svg className={className} width={width} height={height}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
};

export default Icons;
