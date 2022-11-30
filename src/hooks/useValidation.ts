import { useEffect, useState } from 'react';

interface Validations {
  isEmpty: boolean;
}

export const useValidation = (value: string, validations: Validations): Validations => {
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
