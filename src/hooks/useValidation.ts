import { Validation } from '@/models/IValidation';
import { useEffect, useState } from 'react';

export const useValidation = (value: string, validations: Validation): Validation => {
  const [isEmpty, setEmpty] = useState<boolean>(true);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
      }
    }
  }, [value]);

  return { isEmpty };
};
