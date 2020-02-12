import React, { useState, useEffect } from "react";
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
import useStyles from "../../pages/products/styles";


import UrlConstants from "../../util/constants/UrlConstants";
import HTTPServices from "../../util/HttpService/HTTPServices";  

// components
import PageTitle from "../../components/PageTitle";
export default function CreateIndent(props) {
  var classes = useStyles();
  
  
  const [CreateIndentdata, setCreateIndentdata] = useState(
    { 
    type: "",
    indent_date:"",
    total_price:"",
    "indent_item_views": [],
    "location_ids": []
    }
  );

 

  const [locationDropDown, setlocationDropDown ] = useState([]);

  const [ProductDropDown, setProductDropDown ] = useState([]);

  const handleChange = (event) => {
    setCreateIndentdata({...CreateIndentdata, [event.target.name]: event.target.value})
  }


  // const getLocationdata=async () => {
  //   let url = UrlConstants.Ip + UrlConstants.locationsList;
  //   let data =await HTTPServices(url, 'get','')
  //   console.log("GEt",data)
  //   setlocationDropDown(data);
  // }

  //   useEffect( () => {
  //       getLocationdata()
  // }, []);

  // const getLocationdata=async () => {
  //   let url = UrlConstants.Ip + UrlConstants.productsList;
  //   let data =await HTTPServices(url, 'get','')
  //   console.log("GEt",data)
  //   setProductDropDown(data);
  // }

  //   useEffect( () => {
  //       getLocationdata()
  // }, []);


  return (
    <>
    <Paper className={classes.allContainer}>
    <PageTitle title="Create Indent"  />
    </Paper>
    <Paper className={classes.allContainer}> 
      <Grid container spacing={3}>      
        <Grid item lg={4} md={8} sm={6} xs={12}>
        <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-native-simple">Type</InputLabel>
      <Select required
        native
        placeholder="Select Type"
        name="manufacturer"
        value={registerProductdata.manufacturer}
        onChange={handleChange}
        input={<FilledInput name="age" id="filled-age-native-simple"
          classes={{            
          input: classes.ManufacturerSelect,
        }} />}
      >
        <option value="" />
        <option value={"OUTWARD"}>Outward</option>
        <option value={"INWARD"}>Inward</option>
        
      </Select>
    </FormControl>
      
        </Grid>


     

        <Grid item lg={4} md={8} sm={6} xs={12}>
        <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-native-simple">Location</InputLabel>
      <Select required
        native
        placeholder="Select Location"
        name="location_ids"
        value={registerProductdata.manufacturer}
        onChange={handleChange}
        input={<FilledInput name="age" id="filled-age-native-simple"
          classes={{            
          input: classes.ManufacturerSelect,
        }} />}
      >
        <option value="" />
        {locationDropDown.map((data, i) => {
          return (
            <option value={data.id} key={i}>
              {data.name}
            </option>
          );
        })}
        
      </Select>
    </FormControl>
      
        </Grid>

        <Grid item lg={4} md={8} sm={6} xs={12}>
        <TextField
        id="datetime-local"
        label="Indent date"
        type="datetime-local"
        defaultValue="2020-02-13T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
          
        </Grid>

      </Grid>
      <Grid container spacing={3}>  
     
      <Grid item lg={4} md={4} sm={6} xs={12}>
      <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-native-simple">Product List</InputLabel>
      <Select required
        native
        placeholder="Select Product"
        name="product_id"
        value={registerProductdata.status}
        onChange={handleChange}
        input={<FilledInput name="age" id="filled-age-native-simple"
          classes={{            
          input: classes.StatusSelect,
        }} />}
      >
        <option value="" />
        {ProductDropDown.map((data, i) => {
          return (
            <option value={data.id} key={i}>
              {data.name}
            </option>
          );
        })}
      
      </Select>
    </FormControl>
      </Grid>

      <Grid item lg={4} md={8} sm={6} xs={12}>
      <TextField  
      id="quant"
      label="Quantity"
      InputProps={{
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        },
      }}
      name="quantity"
      value={registerProductdata.hsnCode}
      onChange={handleChange}
      margin="normal"
      placeholder="Enter Quantity"
      type="category"
      variant="filled"
      
    />
       
      </Grid>

      <Grid item lg={4} md={8} sm={6} xs={12}>
      <TextField  
      id="pric"
      label="Price"
      InputProps={{
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        },
      }}
      name="price"
      value={registerProductdata.hsnCode}
      onChange={handleChange}
      margin="normal"
      placeholder="Enter price"
      type="category"
      variant="filled"
      
    />
       
      </Grid>

    </Grid>
    
       <Grid container spacing={4}>
  
      <Grid item lg={6} md={8} sm={6} xs={12}>
      <Button
                    
                    
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Create
                  </Button>
       
      </Grid>
      </Grid>
      </Paper>
    </>
  );
}
