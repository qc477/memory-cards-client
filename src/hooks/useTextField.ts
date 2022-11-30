import { ChangeEvent, useState } from 'react';

interface useTextFieldReturn {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export const useTextField = (initialValue: string): useTextFieldReturn => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const onClear = () => {
    setValue('');
  };

  return { value, onChange, onClear };
};
