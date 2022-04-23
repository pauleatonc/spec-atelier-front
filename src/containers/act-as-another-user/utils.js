export const EXPANDED = {
  ACT_AS: 'Suplantar',
};

export const COLUMNS = {
  USERS: [
    {
      Header: 'ID',
      accessor: 'id',
      canSort: false,
    },
    {
      Header: 'Nombre',
      accessor: 'first_name',
      canSort: true,
    },
    {
      Header: 'Apellido',
      accessor: 'last_name',
      canSort: true,
    },
    {
      Header: 'Email',
      accessor: 'email',
      canSort: true,
    },
    {
      Header: 'Cliente',
      accessor: 'client_role',
      canSort: true,
    },
  ],
};
