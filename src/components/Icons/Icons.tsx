import React from 'react';
import IconsSVG from './icons.svg';

interface IconsProps {
  name: string,
  width?: string,
  height?: string,
  className: string
}

const Icons: React.FC<IconsProps> = ({name, width, height, className}) => {
  return (
    <svg className={className} width={width} height={height}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
}

export default Icons;
