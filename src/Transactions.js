import * as React from "react";
import Link from "@mui/material/Link";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


function preventDefault(event) {
  event.preventDefault();
}

export default function Transactions() {
  return (
    <React.Fragment>
      <Title>Transactions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Leverage Ratio</TableCell>
            <TableCell>Current Rate</TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>
              <Select>
                <MenuItem value={10}>USD</MenuItem>
                <MenuItem value={20}>EUR</MenuItem>
                <MenuItem value={30}>JSD</MenuItem>
              </Select>
              </TableCell>
              <TableCell>
              <Select>
                <MenuItem value={10}>USD</MenuItem>
                <MenuItem value={20}>EUR</MenuItem>
                <MenuItem value={30}>JSD</MenuItem>
              </Select>
              </TableCell>
              <TableCell>
              <Select>
                <MenuItem value={10}>1:10</MenuItem>
                <MenuItem value={20}>1:100</MenuItem>
                <MenuItem value={30}>1:1000</MenuItem>
                <MenuItem value={30}>1:10000</MenuItem>
              </Select>
              </TableCell>
              <TableCell>
                $1.000534
              </TableCell>
              <TableCell>
                <Button variant="outlined">Buy</Button>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
