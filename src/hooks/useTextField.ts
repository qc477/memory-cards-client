import { Validation } from '@/models/IValidation';
import { ChangeEvent, useState } from 'react';
import { useValidation } from './useValidation';

interface useTextFieldReturn {
  value: string;
  valid: Validation;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export const useTextField = (initialValue: string, validations: Validation): useTextFieldReturn => {
  const [value, setValue] = useState<string>(initialValue);
  const valid = useValidation(value, validations);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const onClear = () => {
    setValue('');
  };

  return { value, valid, onChange, onClear };
};
