import React from 'react';
import { useTable, useExpanded } from 'react-table';
import PropTypes from 'prop-types';

import {
  Table,
  RowTable,
  TableTh,
  TableHead,
  TableBody,
  TableTd,
  IconSort,
} from './Table.styles';

export const SORT_ORDER_OPTIONS = {
  ASC: 'asc',
  DESC: 'desc',
};

const ReactTable = ({ columns, data, onSortTable, sortBy, sortOrder }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useExpanded,
  );

  return (
    <>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <RowTable id={headerGroup} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <TableTh
                    {...column.getHeaderProps()}
                    onClick={() => onSortTable(column)}
                    canSort={column.canSort}
                  >
                    {column.render('Header')}
                    <IconSort
                      className={`fas ${
                        column.id === sortBy &&
                        (sortOrder === SORT_ORDER_OPTIONS.ASC
                          ? 'fa-arrow-up'
                          : 'fa-arrow-down')
                      }`}
                    />
                  </TableTh>
                );
              })}
            </RowTable>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <>
                <RowTable {...row.getRowProps()} isExpanded={row.isExpanded}>
                  {row.cells.map((cell) => (
                    <TableTd
                      {...cell.getCellProps()}
                      isProjectType={cell.column?.id === 'project_type'}
                    >
                      {cell.render('Cell')}
                    </TableTd>
                  ))}
                </RowTable>
              </>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default ReactTable;

ReactTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  total: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  nextPage: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};
