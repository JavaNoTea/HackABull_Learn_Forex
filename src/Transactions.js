import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useState } from "react";
import { auth, db } from "./firebase-config/firebase";
import { setDoc, doc } from "firebase/firestore";
import { useContext } from "react";
import { arrayUnion } from "firebase/firestore";
import { AuthContext } from "./context/AuthContext";


function preventDefault(event) {
  event.preventDefault();
}

export default function Transactions() {

  let cur1 = "";
  let cur2 = "";

let newArray;
  function drawOutput(responseText) {
   // let resp = JSON.parse(responseText).forexList;
    // console.log("works")
    // console.log(responseText);
    newArray = eval(responseText);
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
  

  let multiplier = 0;

  function handleChange(){
    
    cur1 = document.getElementById("from").innerHTML;
    cur2 = document.getElementById("to").innerHTML;
    const link = "https://financialmodelingprep.com/api/v3/quote/"+ cur1 + cur2 + "?apikey=98c230cb5831a3d2a2c9aa22bdd7b62c"
    //console.log(link)
    getRequest(
      link,
      drawOutput
    );
      console.log(cur1+cur2)
      try{
    setMult(newArray[0].price)
      }
      catch(e){
        console.log(e)
      }
  }

  const [mult, setMult] = useState(0);

  const {currentUser} = useContext(AuthContext)
  const contactDB = async(cur2) =>{
    try{
      await setDoc(doc(db, "currency", currentUser.uid), {
          Carray: arrayUnion({
              type:cur2,
              amount:newArray[0].price,
          })}
      )
  }
  catch(e){
      console.log(e);
  }
  }


  const handleClick= () => {
    let temp = document.getElementById("multiplier").innerHTML;
    temp = temp.substring(2,temp.length);
    cur1 = document.getElementById("from").innerHTML;
    cur2 = document.getElementById("to").innerHTML;






    const link = "https://financialmodelingprep.com/api/v3/quote/"+ cur1 + cur2 + "?apikey=98c230cb5831a3d2a2c9aa22bdd7b62c"
    //console.log(link)
    getRequest(
      link,
      drawOutput
    );

    contactDB(cur2);
  }

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
              <Select id="from" onChange={() => {handleChange()}}>
                <MenuItem value={10}>USD</MenuItem>
                <MenuItem value={20}>EUR</MenuItem>
                <MenuItem value={30}>GBP</MenuItem>
                <MenuItem value={40}>CHF</MenuItem>
              </Select>
              </TableCell>
              <TableCell>
              <Select onChange={() => {handleChange()}} id="to">
                <MenuItem value={10}>USD</MenuItem>
                <MenuItem value={20}>EUR</MenuItem>
                <MenuItem value={30}>GBP</MenuItem>
                <MenuItem value={40}>CHF</MenuItem>
              </Select>
              </TableCell>
              <TableCell>
              <Select id="multiplier">
                <MenuItem value={10} >1:10</MenuItem>
                <MenuItem value={20}>1:100</MenuItem>
                <MenuItem value={30} >1:1000</MenuItem>
                <MenuItem value={30} >1:10000</MenuItem>
              </Select>
              </TableCell>
              <TableCell>
                ${mult}
              </TableCell>
              <TableCell>
                <Button onClick={() => {handleClick()}} variant="outlined">Buy</Button>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={(e) => {preventDefault(e)}} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
