import React, { useEffect, useState } from 'react';
import './App.scss';
import {
  getSelectDataBrandsTerms,
  getSelectDataStyles,
  getSelectDataTerms,
} from './api/api';

import { Select } from './components/Select/Select';
import { ModalError } from './components/Modal/ModalError';

export const App: React.FC = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const [termsSelectData, setTermsSelectData] = useState([]);
  const [brandsTermsSelectData, setBrandsTermsSelectData] = useState([]);
  const [stylesSelectData, setStylesSelectData] = useState([]);

  useEffect(() => {
    async function response() {
      try {
        const termsDataFromServer = await getSelectDataTerms();
        const brandsTermsDataFromServer = await getSelectDataBrandsTerms();
        const stylesDataFromServer = await getSelectDataStyles();

        setTermsSelectData(termsDataFromServer.data);
        setBrandsTermsSelectData(brandsTermsDataFromServer.data);
        setStylesSelectData(stylesDataFromServer.data);
      } catch {
        setIsModalActive(true);
      }
    }

    response();
  }, []);

  return (
    <div className="App">
      <Select prefix="s" selectList={termsSelectData} />
      <Select prefix="b" selectList={brandsTermsSelectData} />
      <Select prefix="st" selectList={stylesSelectData} />

      {isModalActive && (
        <ModalError
          active={isModalActive}
          setActive={setIsModalActive}
          content="Cant load data from server..."
        />
      )}
    </div>
  );
};
