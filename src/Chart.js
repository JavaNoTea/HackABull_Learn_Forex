import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import ReactEcharts from "echarts-for-react"; 
import { useState, useEffect } from 'react';

let newData = [{time:20,amount:30}];

const Chart = () => {


  useEffect(() => {
    getRequest(
      'https://financialmodelingprep.com/api/v3/historical-chart/5min/JPYUSD?apikey=98c230cb5831a3d2a2c9aa22bdd7b62c',
      drawOutput
    );
  }, [])


let [temp, setTemp] = useState([1,2,3,4]);
let [value, setValue] = useState([1,2,3,4]);
function drawOutput(responseText) {
  let resp = JSON.parse(responseText).forexList;
  console.log(eval(responseText));

  let newArray = eval(responseText);


  let reactarr = newArray.splice(0,10)

  let tem1 = [];
  let tem2 = [];

  for(let i = 0; i < reactarr.length; i++){
    tem1[i] = reactarr[i].open;
    tem2[i] = reactarr[i].date.substr(11,10);
  }


  setTemp(tem1)
  setValue(tem2)

 

  console.log(reactarr)
  console.log("asd");
  console.log(temp)
  console.log(value)
}


function getRequest(url, success) {
  var req = false;
  try {
    req = new XMLHttpRequest();
  } catch (e) {
    try {
      //req = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
       // req = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        return false;
      }
    }
  }
  if (!req) return false;
  if (typeof success != 'function') success = function() {};
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
      if (req.status === 200) {
        success(req.responseText)
      }
    }
  }
  req.open("GET", url, true);
  req.send(null);
  console.log(req)
  return req;
}





  const theme = useTheme();
  const option = {
    xAxis: {
      type: 'category',
      data: value
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: temp,
        type: 'line'
      }
    ]
  }; 

  return (
  <ReactEcharts option={option} />
  );
}

export default Chart;
