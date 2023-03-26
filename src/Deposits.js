import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Clock from './Clock'

function preventDefault(event) {
  event.preventDefault();
}

//This function with add commas and a $ to the amount given
function getTotal(num) {
  let numberString = num.toString();
  let numberArray = numberString.split('');
  numberArray.reverse();
  let chunks = [];

  for (let i = 0; i < numberArray.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      chunks.push(',');
    }
    chunks.push(numberArray[i]);
  }

  let result = chunks.reverse().join('');

  return '$' + result;
}


export default function Deposits() {
  return (
    <React.Fragment>
      <div className='text-center'>
      <Title>Account Total</Title>
      <Typography component="p" variant="h4"> 
        { getTotal(10000) } {/* Pull total from server */}
      </Typography>
      <Typography component="p" variant="h8" color="black">
        at <Clock/>
      </Typography>
      <div>
    </div>
    </div>
    </React.Fragment>
  );
}
