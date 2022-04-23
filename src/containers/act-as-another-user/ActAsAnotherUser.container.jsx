import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { becomeUser, clearImpersonated } from 'containers/auth/auth.actions';
import { clearProjects } from 'containers/projects-list/ProjectsList.actions';
import ReactTable from 'components/table/Table';
import Button from 'components/buttons/Button';
import ProductHeader from 'components/product/ProductsHeader';
import { VARIANTS_BUTTON } from 'config/constants/button-variants';
import { getUsers } from './ActAsAnotherUser.actions';
import UsersSearchContainer from '../search/Search.container';
import { EXPANDED, COLUMNS } from './utils';

const ActAsAnotherUserContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { params, users } = useSelector((state) => state.actAsAnotherUserList);
  const { impersonated } = useSelector((state) => state.auth);
  const [keyword, setKeyword] = useState(params.keyword || '');

  useEffect(() => {
    if (!users?.list) dispatch(getUsers(params));
    if (impersonated) {
      history.push('/projects');
      dispatch(clearImpersonated());
      dispatch(clearProjects());
    }
  }, [users, impersonated]);

  const onChangeParams = ({ target: { name, value } }) => {
    setKeyword(value);
    dispatch(getUsers({ ...params, [name]: value }));
  };

  const listFormatter = (list) => {
    const newList = list.map((user_item) => {
      const { client_role, ...UserWithoutClientRole } = user_item;
      const clientRole = client_role ? 'Sí' : 'No';
      return { ...UserWithoutClientRole, client_role: clientRole };
    });
    return newList;
  };

  const becomeUserHandler = (id) => {
    dispatch(becomeUser({ user_id: id }));
  };

  const columns = useMemo(
    () => [
      ...COLUMNS.USERS,
      {
        id: 'expander',
        Header: () => null,
        Cell: ({ row }) => (
          <Button
            variant={VARIANTS_BUTTON.CANCEL}
            onClick={() => becomeUserHandler(row.original.id)}
          >
            {EXPANDED.ACT_AS}
          </Button>
        ),
      },
    ],
    [],
  );

  return (
    <>
      <ProductHeader />
      <UsersSearchContainer
        keyword={keyword}
        onChangeParams={onChangeParams}
        placeholder="Buscar usuario"
      />
      {users?.list?.length > 0 && (
        <ReactTable
          columns={columns}
          data={listFormatter(users.list)}
          total={users.total}
          loading={false}
          page={params.page}
          limit={params.limit}
          nextPage={users.next_page || 0}
        />
      )}
    </>
  );
};

export default ActAsAnotherUserContainer;
