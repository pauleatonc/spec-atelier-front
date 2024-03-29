import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getClients } from '../clients-list/ClientsList.actions';
import { SearchBar } from '../../components/SpecComponents';
import { Container } from './ClientsSearch.style';

const ClientsFilters = () => {
  const dispatch = useDispatch();
  const { params } = useSelector((state) => state.clientsList);
  const [keyword, setKeywords] = useState(params.keyword || '');

  const onChangeParams = ({ target: { name, value } }) => {
    setKeywords(value);
    dispatch(
      getClients({
        ...params,
        [name]: value,
      }),
    );
  };

  return (
    <Container>
      <SearchBar
        name="keyword"
        justifyContent="flex-start"
        maxWidth="432px"
        placeholder="Buscar"
        value={keyword}
        onChange={onChangeParams}
      />
    </Container>
  );
};

export default ClientsFilters;
