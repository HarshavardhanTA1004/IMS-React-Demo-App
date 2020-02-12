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

export default function LocationList(props) {
  var classes = useStyles();

const [LocationTableData, setLocationTableData] = useState([]);

  const getdata=async () => {
    let url = UrlConstants.Ip + UrlConstants.locationsList
    let data =await HTTPServices(url, 'get','')
    console.log("data",data)
    
    setLocationTableData(data);
  }

    useEffect( () => {
    getdata()
  }, []);

  function UpdateLocationID(id){
    console.log(id)
    props.history.push("/app/location/UpdateLocation/"+id);
  }

  const checkActive = {
    true: "Yes",
    false: "No",

  }
    


  return (
    <>
    <Paper className={classes.allContainer}>
    <PageTitle title="Locations List" />
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
          <TableCell >Description</TableCell>
          <TableCell >Active</TableCell>
         
         
     
        </TableRow>
      </TableHead>
      <TableBody>
        {LocationTableData.map(({ id,name, type, description, active }) => (
          <TableRow key={id}>
            <TableCell className="pl-3 fw-normal">{name}</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>{description}</TableCell> 
            <TableCell>{checkActive[active]}</TableCell>
                    
               
            <TableCell>
              <Button
                color="success"
                size="small"
                className="px-2"
                variant="contained"
                onClick={()=>UpdateLocationID(id)}
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
