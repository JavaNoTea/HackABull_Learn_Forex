import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());

    return `${year}-${month}-${day}`;
  };

  const formatTime = (date) => {
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const seconds = padZero(date.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
  };

  const padZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };


  return (
    <div>
      <Typography component="p" variant="h8" color="black">
        {formatTime(time)}
        { <br></br> }
        {formatDate(time)}
      </Typography>
      
    </div>
  );
  }
  
  export default Clock;

