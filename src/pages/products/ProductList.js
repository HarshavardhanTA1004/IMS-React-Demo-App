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

export default function ProductList(props) {
  var classes = useStyles();

const [ProductTableData, setProductTableData] = useState([]);

  const getdata=async () => {
    let url = UrlConstants.Ip + UrlConstants.productsList
    let data =await HTTPServices(url, 'get','')
    console.log("data",data)
    
    setProductTableData(data);
  }

    useEffect( () => {
    getdata()
  }, []);

  function UpdateProductID(id){
    console.log(id)
    props.history.push("/app/products/UpdateProduct/"+id);
  }

  

  return (
    <>
    <Paper className={classes.allContainer}>
    <PageTitle title="Products List" />
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
          <TableCell >Manufacturer</TableCell>
          <TableCell >Category</TableCell>
          <TableCell >HSN</TableCell>
          <TableCell >SKU</TableCell>
          <TableCell >Quantity</TableCell>
          <TableCell >Unit</TableCell>
          <TableCell >Price</TableCell>
         
     
        </TableRow>
      </TableHead>
      <TableBody>
        {ProductTableData.map(({ id,name, manufacturer, category, hsnCode,sku, quantity, unit, price }) => (
          <TableRow key={id}>
            <TableCell className="pl-3 fw-normal">{name}</TableCell>
            <TableCell>{manufacturer}</TableCell>
            <TableCell>{category}</TableCell> 
            <TableCell>{hsnCode}</TableCell>
            <TableCell>{sku}</TableCell>
            <TableCell>{quantity}</TableCell>
            <TableCell>{unit}</TableCell>  
            <TableCell>{price}</TableCell>         
               
            <TableCell>
              <Button
                color="success"
                size="small"
                className="px-2"
                variant="contained"
                onClick={()=>UpdateProductID(id)}
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
