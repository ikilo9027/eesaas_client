import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import moment from 'moment';

interface Column {
  id: 'paymentNameList' | 'paymentAmount' | 'buyTime';
  label: string;
  minWidth?: string;
  align?: 'right';
}

const columns: readonly Column[] = [
  { id: 'paymentNameList', label: '모델명', minWidth: '30%' },
  { id: 'paymentAmount', label: '사용한 포인트', minWidth: '30%' },
  {
    id: 'buyTime',
    label: '사용한 날짜',
    minWidth: '30%',
    // align: 'right',
  },
];

export interface rowsDataProps {
  buyTime: string
  id: number
  paymentAmount: number
  paymentNameList: string
  refundPurchase: string
  userId: string
}

interface Props {
  rows: rowsDataProps[]
}

export default function StickyHeadTable(props: Props): JSX.Element {

  const {
    rows
  } = props

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // const [rows, ] = React.useState([]);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function formatDate(date: string) {
    return moment(date).format("YYYY-MM-DD HH:mm:ss")
    // return date
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginBottom: '50px' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={`pay${index}`}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'buyTime'
                            ? formatDate(String(value))
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage="페이지당 행 수"
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}