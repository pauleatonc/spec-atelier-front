import React, { useMemo } from 'react';
import { useTable, useExpanded } from 'react-table';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { handleUpdateProduct } from '../spec-document/SpecDocument.actions';
import { downloadBudgetDocument } from '../spec-header/SpecHeader.actions';
import SpecModalQuote from '../spec-modal-quote/SpecModalQuote.container';
import { getProduct } from '../spec-modal-quote/SpecModalQuote.actions';
import CurrentInputTable from './components/CurrentInputTable';
import {
  Root,
  ContentTable,
  Header,
  Table,
  TableThead,
  TableTbody,
  TableTd,
  TableTh,
  Title,
  ButtonsHeader,
  Button,
  ImgButton,
  IconExpan,
  ButtonConsult,
  ContentFooter,
  TableElements,
  TableTotal,
  ContainerTotalTable,
} from './SpecContentsTable.styles';
import { SPEC_DOWNLOAD_SOURCE } from '../../assets/Images';

const SpecContentsTable = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { project, quoteTable, totalExpandManual } = useSelector(
    (state) => state.specDocument,
  );
  const { user } = useSelector((state) => state.profile);
  const { first_name, last_name, company, email } = useSelector(
    (state) => state.profile.user,
  );
  const initialValues = {
    name: `${first_name} ${last_name}`,
    company: company || '',
    email: email || '',
    description: '',
  };

  const handleDownloadTableClick = () =>
    dispatch(downloadBudgetDocument({ specID: id }));

  const totalProducts = quoteTable.reduce((a, b) => a + b.subtotal, 0);

  const handleOnBlurInput = (tableInputType, inputValue, row) => {
    const body = {
      id: row.original.id,
      data: {
        product: {
          [tableInputType]: parseInt(inputValue, 10),
        },
      },
    };
    dispatch(handleUpdateProduct(body, tableInputType, row.original.item));
  };

  const onClickProduct = (selectedProduct) => (event) => {
    event.stopPropagation();
    dispatch(getProduct(selectedProduct, user));
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Ítem',
        accessor: 'item_id',
        width: 'auto',
      },
      {
        Header: 'Descripción',
        accessor: 'desc',
        width: '350px',
      },
      { Header: 'Unidad', accessor: 'unit', width: 'auto' },
      {
        Header: 'Cantidad',
        width: '95px',
        Cell: ({ row }) =>
          row?.original?.type === 'Product' && (
            <CurrentInputTable
              tableInputType="quantity"
              value={row?.original?.cnt}
              onBlurInput={handleOnBlurInput}
              row={row}
            />
          ),
      },
      {
        Header: 'Precio',
        width: '95px',
        Cell: ({ row }) => {
          if (row?.original?.type === 'Product') {
            if (row?.original?.price) {
              return `$${row?.original?.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
            }
            return (
              <CurrentInputTable
                tableInputType="price_user"
                value={row?.original?.price_user}
                onBlurInput={handleOnBlurInput}
                row={row}
              />
            );
          }
          return '';
        },
      },
      {
        Header: 'Subtotal',
        width: '95px',
        Cell: ({ row }) =>
          `$${row?.original?.subtotal
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`,
      },
      {
        id: 'expander',
        width: '130px',
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <Button isExpandButton {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? 'Contraer filas' : 'Expandir filas'}
          </Button>
        ),
        Cell: ({ row }) => {
          switch (row?.original?.type) {
            case 'Item':
            case 'Section':
              return (
                <IconExpan
                  {...row.getToggleRowExpandedProps()}
                  className={`fas fa-chevron-${row.isExpanded ? 'up' : 'down'}`}
                />
              );
            case 'Product':
              return !row?.original?.price ? (
                <ButtonConsult onClick={onClickProduct(row?.original)}>
                  Consultar precio
                </ButtonConsult>
              ) : (
                ''
              );
            default:
              return '';
          }
        },
      },
    ],
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data: quoteTable,
      autoResetExpanded: false,
    },
    useExpanded,
  );

  return !!project && !!quoteTable && !!totalExpandManual ? (
    <Root>
      <ContentTable>
        <Table {...getTableProps()}>
          <TableThead>
            <Header colSpan="7">
              <Title>Itemizado y presupuesto: {project?.name}</Title>
              <ButtonsHeader>
                <Button
                  title="Descargar presupuesto"
                  onClick={handleDownloadTableClick}
                >
                  <ImgButton src={SPEC_DOWNLOAD_SOURCE} />
                  Descargar
                </Button>
              </ButtonsHeader>
            </Header>
          </TableThead>
          <TableThead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableTh
                    {...column.getHeaderProps()}
                    isDesc={column.id === 'desc'}
                  >
                    {column.render('Header')}
                  </TableTh>
                ))}
              </tr>
            ))}
          </TableThead>
          <TableTbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <TableTd
                      {...cell.getCellProps()}
                      isTypeUnity={cell?.row?.original?.type === 'Product'}
                      isDesc={cell.column.id === 'desc'}
                    >
                      {cell.render('Cell')}
                    </TableTd>
                  ))}
                </tr>
              );
            })}
          </TableTbody>
          <tfoot>
            <tr>
              <td colSpan="7">
                <ContentFooter>
                  <TableElements>
                    {totalExpandManual[2].length} elementos especificados
                  </TableElements>
                  <ContainerTotalTable>
                    <TableTotal mRight="36">Total:</TableTotal>
                    <TableTotal>
                      $
                      {totalProducts
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    </TableTotal>
                  </ContainerTotalTable>
                </ContentFooter>
              </td>
            </tr>
          </tfoot>
        </Table>
      </ContentTable>
      <SpecModalQuote initialValues={initialValues} />
    </Root>
  ) : (
    <RotatingLines width="50" />
  );
};

export default SpecContentsTable;
