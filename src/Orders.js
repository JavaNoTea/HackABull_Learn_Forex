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
            <Tooltip title="Date and time the exchange took place">
            <TableCell>Date</TableCell>
            </Tooltip>
            <Tooltip title="Currency exchange refers to the buying and selling of different types of money, such as US Dollars, Euros, or Japanese Yen. Forex traders use currency exchange to profit from changes in exchange rates, which determine how much one currency is worth relative to another.">
            <TableCell>Currency</TableCell>
            </Tooltip>
            <Tooltip title="The current price in forex trading refers to the exchange rate of one currency in relation to another, such as USD/EUR. This ratio indicates how much of one currency is needed to buy a unit of the other. Forex traders use current prices to monitor currency pairs and speculate on their future movements to potentially profit from the changes in exchange rates.">
            <TableCell>Current Price</TableCell>
            </Tooltip>
            <Tooltip title="The price entered trade refers to the exchange rate at which a forex trader opens a position on a currency pair, such as buying USD/EUR at 1.2000. This price determines the initial cost of the trade and helps determine the potential profit or loss. Forex traders often set stop-loss and take-profit levels based on the price entered trade to manage their risk and optimize their returns.">
            <TableCell>Price Entered</TableCell>
            </Tooltip>
            <Tooltip title="Leverage ratio in forex trading refers to the amount of borrowed funds a trader can use to open a position relative to their own capital. For example, a leverage ratio of 50:1 means that a trader can control $50 in the market with only $1 of their own money. While leverage can amplify potential profits, it also increases the risk of losses. Forex traders should carefully consider their leverage ratio and use risk management strategies to control their exposure to the market.">
            <TableCell>Leverage Ratio</TableCell>
            </Tooltip>
            <Tooltip title="Profit in forex trading refers to the financial gain earned from a successful trade. It's the difference between the purchase price and the selling price of a currency pair, minus any associated fees or commissions. Forex traders aim to generate profits by accurately predicting market movements and opening positions accordingly. To optimize their returns, traders may use various analysis tools and strategies to monitor the market and identify potential profit opportunities.">
            <TableCell align="right">Profit</TableCell>
            </Tooltip>
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
