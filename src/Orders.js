import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, currency, curPrice, enterPrice, leverage, amount) {
  return { id, date, currency, curPrice, enterPrice, leverage, amount };
}

const rows = [
  createData(
    0,
    '10:36PM',
    'USD -> EUR',
    '$1.05',
    '$0.98',
    '1:1000',
    '$0.16 (0.06%)',
  ),
  createData(
    1,
    '10:36PM',
    'USD -> EUR',
    '$1.05',
    '$0.98',
    '1:1000',
    '$0.16 (0.06%)',
  ),
  createData(
    2,
    '10:36PM',
    'USD -> EUR',
    '$1.05',
    '$0.98',
    '1:1000',
    '$0.16 (0.06%)',
  ),
  createData(
    3,
    '10:36PM',
    'USD -> EUR',
    '$1.05',
    '$0.98',
    '1:1000',
    '$0.16 (0.06%)',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Trades</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Currency</TableCell>
            <TableCell>Current Price</TableCell>
            <TableCell>Price Entered</TableCell>
            <TableCell>Leverage Ratio</TableCell>
            <TableCell align="right">Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.currency}</TableCell>
              <TableCell>{row.curPrice}</TableCell>
              <TableCell>{row.enterPrice}</TableCell>
              <TableCell>{row.leverage}</TableCell>
              <TableCell align="right">{`${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
