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
import useStyles from "../products/styles";

import UrlConstants from "../../util/constants/UrlConstants";
import HTTPServices from "../../util/HttpService/HTTPServices";  

// components
import PageTitle from "../../components/PageTitle/PageTitle";
export default function VendorClient(props) {
  var classes = useStyles();
  
  const [customers, setCustomers] = useState(
    { name: '', type: '', address: '', contactNumber: '', pan: '', gst: ''}
);

const handleChange = (event) => {
  setCustomers({...customers, [event.target.name]: event.target.value})
}

const createVendorClient = async () => {
  let url = UrlConstants.Ip + UrlConstants.createcustomer
let data= await HTTPServices(url, 'post', customers)
props.history.push("/app/vendorsClients/VendorClientList")
}
  

  return (
    <>
     
      <Paper className={classes.allContainer}>
      <PageTitle title="Create Vendor/Client"  />
      </Paper>
      <Paper className={classes.allContainer}>
   
      <Grid container spacing={2}>
        <Grid item lg={6} md={8} sm={6} xs={12}>
        <TextField required
        id="custName"
        name="name"
        label="Name"
        InputProps={{
          classes: {
            underline: classes.textFieldUnderline,
            input: classes.textField,
          },
        }}
        value={customers.name}
        onChange={handleChange}
        margin="normal"
        placeholder="Enter Vendor/Client Name"
        type="name"
        variant="filled"
        
      />
          
        </Grid>
        <Grid item lg={3} md={8} sm={6} xs={12}>
        <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-native-simple">Type</InputLabel>
      <Select required
        native
        placeholder="Select Type"
        name="type"
        value={customers.type}
        onChange={handleChange}
        input={<FilledInput name="age" id="filled-age-native-simple"
          classes={{            
          input: classes.ManufacturerSelect,
        }} />}
      >
        <option value="" />
        <option value={"CLIENT"}>CLIENT</option>
        <option value={"VENDOR"}>VENDOR</option>
       
      </Select>
    </FormControl>
      
        </Grid>

      </Grid>
      <Grid container spacing={2}>
  
      <Grid item lg={6} md={8} sm={6} xs={12}>
      <TextField  
      id="addres"
      name="address"
      label="Address"
      InputProps={{
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        },
      }}
      value={customers.address}
      onChange={handleChange}
      margin="normal"
      placeholder="Enter Address"
      type="category"
      variant="filled"
      
    />
       
      </Grid>
      <Grid item lg={6} md={4} sm={6} xs={12}>
      <TextField  
      id="Cnum"
      name="contactNumber"
      label="Contact Number"
      InputProps={{
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        },
      }}
      value={customers.contactNumber}
      onChange={handleChange}
      margin="normal"
      placeholder="Enter Contact Number"
      type="category"
      variant="filled"
      
    />
      </Grid>
    </Grid>   

    <Grid container spacing={2}>
  
      <Grid item lg={6} md={8} sm={6} xs={12}>
      <TextField  
      id="desc"
      name="pan"
      label="PAN"
      InputProps={{
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        },
      }}
      value={customers.pan}
      onChange={handleChange}
      margin="normal"
      placeholder="Enter PAN"
      type="category"
      variant="filled"
      
    />
       
      </Grid>
      <Grid item lg={6} md={8} sm={6} xs={12}>
      <TextField  
      id="gsT"
      name="gst"
      label="GST"
      InputProps={{
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        },
      }}
      value={customers.gst}
      onChange={handleChange}
      margin="normal"
      placeholder="Enter PAN"
      type="category"
      variant="filled"
      
    />
       
      </Grid>
      </Grid>
      <br/>
      <br/>
       <Grid container spacing={4}>
  
      <Grid item lg={6} md={8} sm={6} xs={12}>
      <Button
                    disabled={
                      customers.name.length === 0 || customers.type.length === 0 || customers.address.length === 0
                    }
                    onClick={createVendorClient}
                      
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


