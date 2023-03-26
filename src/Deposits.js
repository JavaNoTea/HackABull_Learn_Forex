import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import Clock from "./Clock";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

function preventDefault(event) {
  event.preventDefault();
}

//This function with add commas and a $ to the amount given
function getTotal(num) {
  let numberString = num.toString();
  let numberArray = numberString.split("");
  numberArray.reverse();
  let chunks = [];

  for (let i = 0; i < numberArray.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      chunks.push(",");
    }
    chunks.push(numberArray[i]);
  }

  let result = chunks.reverse().join("");

  return "$" + result;
}

export default function Deposits() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <React.Fragment>
      <Title>Account Total</Title>
      <Typography component="p" variant="h4">
        {getTotal(10000)} {/* Pull total from server */}
      </Typography>
      <Typography component="p" variant="h8" color="black">
        at <Clock />
      </Typography>

      <div style={{ alignItems: "center", marginTop: "4%" }}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="hr">1 Hour</ToggleButton>
          <ToggleButton value="day">1 Day</ToggleButton>
          <ToggleButton value="week">1 Week</ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div style={{ alignItems: "center", marginTop: "5%" }} size="small">
        <Select style={{ alignItems: "center", marginRight: "2%", height:"90%"}}>
          <MenuItem value={10}>USD</MenuItem>
          <MenuItem value={20}>EUR</MenuItem>
          <MenuItem value={30}>JPY</MenuItem>
        </Select>
        <Select style={{ alignItems: "center", marginLeft: "2%", height:"90%" }}>
          <MenuItem value={10}>USD</MenuItem>
          <MenuItem value={20}>EUR</MenuItem>
          <MenuItem value={30}>JPY</MenuItem>
        </Select>
      </div>
    </React.Fragment>
  );
}
