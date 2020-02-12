import React, {useState, useEffect} from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Button,
  Paper,
  Grid,
} from "@material-ui/core";

import UrlConstants from "../../util/constants/UrlConstants";
import HTTPServices from "../../util/HttpService/HTTPServices";

// components
import PageTitle from "../../components/PageTitle";
import useStyles from "../products/styles";
import { getThemeProps } from '@material-ui/styles';

export default function VendorClientList(props) {
  var classes = useStyles();

const [VendorClientTableData, setVendorClientTableData] = useState([]);

  const getdata=async () => {
    let url = UrlConstants.Ip + UrlConstants.customersList
    let data =await HTTPServices(url, 'get','')
    console.log("data",data)
    
    setVendorClientTableData(data);
  }

    useEffect( () => {
    getdata()
  }, []);

 function UpdateVendorClientID(id){
   console.log(id)
   props.history.push("/app/vendorsClients/UpdateVendorClient/"+id);
 }
  

  return (
    <>
    <Paper className={classes.allContainer}>
    <PageTitle title="Vendor/Client List" />
    </Paper>
    <Paper className={classes.allContainer}>
    <Grid container spacing={4}>
      <Grid item xs={12}>
      
      <Table className="mb-0">
      <TableHead>
        <TableRow>
      {/*    {keys.map(key => (
            <TableCell key={key}>{key}</TableCell>
      ))}   */}

          <TableCell >Name</TableCell>
          <TableCell >Type</TableCell>
          <TableCell >Addres</TableCell>
          <TableCell ></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {VendorClientTableData.map(({ id, name, type, address, status }) => (
          <TableRow key={id}>
            <TableCell className="pl-3 fw-normal">{name}</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>{address}</TableCell>           
               
            <TableCell>
              <Button
                color="success"
                size="small"
                className="px-2"
                variant="contained"
                onClick={()=>UpdateVendorClientID(id)}
              >
                Update
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
   
      </Grid>
   </Grid>
    
    
    </Paper>
     

    </>
  );
}
