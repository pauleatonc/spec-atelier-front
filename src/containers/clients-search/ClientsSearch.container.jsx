import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getClients } from 'containers/clients-list/ClientsList.actions';
import SearchBar from 'components/filters/SearchBar';
import { Container } from './ClientsSearch.style';

const ClientsFilters = () => {
  const dispatch = useDispatch();
  const { params, clients } = useSelector((state) => state.clientsList);
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

  if (!clients.length && !params.keyword) return null;

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
