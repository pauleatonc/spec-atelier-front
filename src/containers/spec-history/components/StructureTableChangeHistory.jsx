import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTable, usePagination } from 'react-table';
import { useParams } from 'react-router';
import { onGetChangeHistory } from '../SpecHistory.actions';
import SearchFilter from './SearchFilter';
import {
  ContentTable,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  PaginationContent,
  GoBackFollowingButton,
  UlPagination,
  LiPagination,
} from '../SpecHistory.styles';

const StructureTableChangeHistory = ({
  columns,
  changes,
  pagesCounter,
  pageCount: controlledPageCount,
  keyword,
  author,
  onChangeParams,
  onChangeAuthor,
  authors,
  queryParamsBuilder,
  actualPage
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    gotoPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({
    columns,
    data: changes,
    initialState: { pageIndex: 0 },
    manualPagination: true,
    pageCount: controlledPageCount,
  }, usePagination);

  const dispatch = useDispatch();
  const { id: specID } = useParams();

  let options = [{ id: 'allAuthors', name: 'Todos los autores' }];
  options = options.concat(authors);

  const goToPreviousPage = () => {
    previousPage();
    const queryParams = { limit: 7, page: pageIndex - 1, keyword };
    dispatch(onGetChangeHistory(specID, queryParamsBuilder(author, queryParams)));
  };

  const goToNextPage = () => {
    nextPage();
    const queryParams = { limit: 7, page: pageIndex + 1, keyword };
    dispatch(onGetChangeHistory(specID, queryParamsBuilder(author, queryParams)));
  };

  const handleGoToPage = (goToPage) => () => {
    gotoPage(goToPage);
    const queryParams = { limit: 7, page: goToPage, keyword };
    dispatch(onGetChangeHistory(specID, queryParamsBuilder(author, queryParams)));
  };

  useEffect(() => {
    const limitPage = 7;
    pagesCounter({ pageSize });
    setPageSize(limitPage);
  }, [pagesCounter, pageSize]);

  return (
    <>
      <SearchFilter
        authors={options}
        keyword={keyword}
        onChangeParams={onChangeParams}
        onChangeAuthor={onChangeAuthor}
        author={author}
      />
      <ContentTable>
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(headerRow =>
                  <Th {...headerRow.getHeaderProps()}> {headerRow.render('Header')} </Th>)
                }
              </tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => <Td {...cell.getCellProps()}> {cell.render('Cell')} </Td>)}
                </tr>
              )
            })}
          </Tbody>
        </Table>
      </ContentTable>
      <PaginationContent>
        <GoBackFollowingButton className='fas fa-chevron-left' onClick={goToPreviousPage} disabled={!canPreviousPage} />
        <UlPagination>
          {pageOptions.map((pageOption, index) =>
            <LiPagination
              key={index}
              onClick={handleGoToPage(Number(pageOption))}
              active={pageOption === actualPage}
            >
              {pageOption + 1}
            </LiPagination>
          )}
        </UlPagination>
        <GoBackFollowingButton className='fas fa-chevron-right' onClick={goToNextPage} disabled={!canNextPage} />
      </PaginationContent>
    </>
  );
};

export default StructureTableChangeHistory;
