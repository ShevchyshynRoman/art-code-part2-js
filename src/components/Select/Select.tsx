import React, { useEffect, useState } from 'react';
import { selectOption } from '../../types/selectOption';

type Props = {
  selectList: selectOption[];
  prefix: string;
};

export const Select: React.FC<Props> = ({
  selectList,
  prefix,
}) => {
  const [selectValue, setSelectValue] = useState('');

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const actualPathname = window.location.pathname;

    if (selectValue) {
      window.history.pushState(
        {},
        '',
        actualPathname.replace(`${prefix}-${selectValue}`, `${prefix}-${e.target.value}`),
      );
    } else {
      const newUrl = actualPathname.replace(
        actualPathname,
        `${actualPathname.length > 1 ? `${actualPathname}/` : ''}${prefix}-${e.target.value}`,
      );

      window.history.pushState({}, '', newUrl);
    }

    setSelectValue(e.target.value);
  };

  useEffect(() => {
    const actualPathname = window.location.pathname;

    const query = actualPathname
      .split('/')
      .filter((el) => !!el.length && el.split('-')[0] === prefix)[0];

    if (query) {
      setSelectValue(query.replace(`${prefix}-`, ''));
    }
  }, []);

  return (
    <select name="select" value={selectValue} onChange={selectHandler}>
      {selectList.map((el) => (
        <option key={el.id} value={el.slug}>
          {el.label}
        </option>
      ))}
    </select>
  );
};
