import React, { useState } from "react";
import {
  Grid,
  TextField,
  Select,
  FilledInput,
  FormControl,
  InputLabel,
  Button,
  Paper,
 
} from "@material-ui/core";
// styles
import useStyles from "./styles";

import UrlConstants from "../../util/constants/UrlConstants";
import HTTPServices from "../../util/HttpService/HTTPServices";  

// components
import PageTitle from "../../components/PageTitle";
export default function RegisterProduct(props) {
  var classes = useStyles();
  
  
  const [registerProductdata, setRegisterProductdata] = useState(
    { name: '', manufacturer: '', hsnCode: '', category: '', sku: '', status: '', description: '', quantity: '', unit: '', price: ''}
  );

  const handleChange = (event) => {
    setRegisterProductdata({...registerProductdata, [event.target.name]: event.target.value})
  }

  const registerProductSubmit = async () => {
    let url = UrlConstants.Ip + UrlConstants.createproduct
     await HTTPServices(url, 'post', registerProductdata)
     props.history.push("/app/products/ProductList")
  }

  return (
    <>
    <Paper className={classes.allContainer}>
    <PageTitle title="Register Product"  />
    </Paper>
    <Paper className={classes.allContainer}> 
      <Grid container spacing={2}>
        <Grid item lg={6} md={8} sm={6} xs={12}>
        <TextField required
        id="product-name"
        name="name"
        label="Product Name"
        InputProps={{
          classes: {
            underline: classes.textFieldUnderline,
            input: classes.textField,
          },
        }}
        value={registerProductdata.name}
        onChange={handleChange}
        margin="normal"
        placeholder="Enter Product Name"
        type="name"
        variant="filled"
        
      />
          
        </Grid>
        <Grid item lg={3} md={8} sm={6} xs={12}>
        <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-native-simple">Manufacturer</InputLabel>
      <Select required
        native
        placeholder="Select Manufacturer"
        name="manufacturer"
        value={registerProductdata.manufacturer}
        onChange={handleChange}
        input={<FilledInput name="age" id="filled-age-native-simple"
          classes={{            
          input: classes.ManufacturerSelect,
        }} />}
      >
        <option value="" />
        <option value={"Manufacturer1"}>Manufacturer1</option>
        <option value={"Manufacturer2"}>Manufacturer2</option>
        <option value={"Manufacturer3"}>Manufacturer3</option>
        <option value={"Manufacturer4"}>Manufacturer4</option>
      </Select>
    </FormControl>
      
        </Grid>

      </Grid>
      <Grid container spacing={2}>
  
      <Grid item lg={6} md={8} sm={6} xs={12}>
      <TextField  
      id="product-category"
      label="HSN Code"
      InputProps={{
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        },
      }}
      name="hsnCode"
      value={registerProductdata.hsnCode}
      onChange={handleChange}
      margin="normal"
      placeholder="HSN Code"
      type="category"
      variant="filled"
      
    />
       
      </Grid>
      <Grid item lg={6} md={4} sm={6} xs={12}>
      <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-native-simple">Status</InputLabel>
      <Select required
        native
        placeholder="Select Status"
        name="status"
        value={registerProductdata.status}
        onChange={handleChange}
        input={<FilledInput name="age" id="filled-age-native-simple"
          classes={{            
          input: classes.StatusSelect,
        }} />}
      >
        <option value="" />
        <option value={"S1"}>Pending</option>
        <option value={"S2"}>Dispatched</option>
        <option value={"S3"}>Recieved</option>
      
      </Select>
    </FormControl>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
  
      <Grid item lg={6} md={8} sm={6} xs={12}>
      <TextField  
      id="product-category"
      label="SKU"
      InputProps={{
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        },
      }}
      name="sku"
      value={registerProductdata.sku}
      onChange={handleChange}
      margin="normal"
      placeholder="SKU"
      type="sku"
      variant="filled"
      
    />
       
      </Grid>
      <Grid item lg={6} md={4} sm={6} xs={12}>
      <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-native-simple">Category</InputLabel>
      <Select
        native
        placeholder="Select Category"
        value={registerProductdata.category}
        onChange={handleChange}
        name="category"
        input={<FilledInput name="age" id="filled-age-native-simple"
          classes={{            
          input: classes.ManufacturerSelect
        }} />}
      >
        <option value="" />
        <option value={"C1"}>Category1</option>
        <option value={"C2"}>Category2</option>
        <option value={"C3"}>Category3</option>
      </Select>
    </FormControl>
      </Grid>
    </Grid>

    <Grid container spacing={2}>
  
      <Grid item lg={6} md={8} sm={6} xs={12}>
      <TextField  
      id="desc"
      label="Description"
      name="description"
      InputProps={{
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        },
      }}
      value={registerProductdata.description}
      onChange={handleChange}
      margin="normal"
      placeholder="Description"
      type="category"
      variant="filled"
      
    />
       
      </Grid>
 
      <Grid>
      <TextField  
      id="desc"
      label="Quantity"
      name="quantity"
      InputProps={{
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        },
      }}
      value={registerProductdata.quantity}
      onChange={handleChange}
      margin="normal"
      placeholder="Enter Quatity"
      type="category"
      variant="filled"
      
    />
       
      </Grid>

      </Grid>
      <Grid container spacing={2}>
  
      <Grid item lg={6} md={8} sm={6} xs={12}>
      <TextField  
      id="pricee"
      label="Price"
      name="price"
      InputProps={{
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        },
      }}
      value={registerProductdata.price}
      onChange={handleChange}
      margin="normal"
      placeholder="Enter Price"
      type="category"
      variant="filled"
      
    />
       
      </Grid>
      <Grid item lg={6} md={4} sm={6} xs={12}>
      <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-native-simple">Unit</InputLabel>
      <Select required
        native
        placeholder="Select Units"
        name="unit"
        value={registerProductdata.unit}
        onChange={handleChange}
        input={<FilledInput name="age" id="filled-age-native-simple"
          classes={{            
          input: classes.StatusSelect,
        }} />}
      >
        <option value="" />
        <option value={"PU1"}>liters</option>
        <option value={"PU2"}>Kilograms</option>
        <option value={"PU3"}>Grams</option>
      
      </Select>
    </FormControl>
      </Grid>
    </Grid>
    <br/>
    <br/>
      
       <Grid container spacing={4}>
  
      <Grid item lg={6} md={8} sm={6} xs={12}>
      <Button
                    disabled={
                      registerProductdata.name.length === 0 || registerProductdata.manufacturer.length === 0 || registerProductdata.hsnCode.length === 0
                    }
                    onClick={registerProductSubmit}
                      
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Register
                  </Button>
       
      </Grid>
      </Grid>
      </Paper>
    </>
  );
}
