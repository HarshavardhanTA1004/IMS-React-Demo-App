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
import useStyles from "../../pages/products/styles";

import UrlConstants from "../../util/constants/UrlConstants";
import HTTPServices from "../../util/HttpService/HTTPServices";  

// components
import PageTitle from "../../components/PageTitle";
export default function CreateLocation(props) {
  var classes = useStyles();
  
  
  var [locationCreationData, setlocationCreationData] = useState({
    
    "type": "",
    "description": "",
    "name": "",
    "active": "",
});

const handleChange = (event) => {
  setlocationCreationData({...locationCreationData, [event.target.name]: event.target.value})
}

const createLocation = async () => {
  let url = UrlConstants.Ip + UrlConstants.createlocation
let data= await HTTPServices(url, 'post', locationCreationData)
props.history.push("/app/location/LocationList")
}
  

  return (
    <>
    <Paper className={classes.allContainer}>
    <PageTitle title="Create Location"  />
    </Paper>
      
      <Paper className={classes.allContainer}>
          
      <Grid container spacing={2}>
        <Grid item lg={6} md={8} sm={6} xs={12}>
        <TextField  
        id="name"
        name="name"
        label="Location Name"
        InputProps={{
          classes: {
            underline: classes.textFieldUnderline,
            input: classes.textField,
          },
        }}
        value={locationCreationData.name}
        onChange={handleChange}
        margin="normal"
        placeholder="Enter Name"
        type="category"
        variant="filled"
        
      />
         
       
          
        </Grid>
        <Grid item lg={3} md={8} sm={6} xs={12}>
        <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-native-simple">Type</InputLabel>
      <Select required
        native
        placeholder="Select Type"
        value={locationCreationData.type}
        name= "type"
        onChange={handleChange}
        input={<FilledInput name="age" id="filled-age-native-simple"
          classes={{            
          input: classes.ManufacturerSelect,
        }} />}
      >
        <option value="" />
        <option value={"L1"}>Type1</option>
        <option value={"L2"}>Type2</option>
        <option value={"L3"}>Type3</option>
 
      </Select>
    </FormControl>
      
        </Grid>

      </Grid>
      <Grid container spacing={2}>
  
      <Grid item lg={6} md={8} sm={6} xs={12}>
      <TextField  
      id="desc"
      name="description"
      label="Description"
      InputProps={{
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        },
      }}
      value={locationCreationData.description}
      onChange={handleChange}
      margin="normal"
      placeholder="Description"
      type="category"
      variant="filled"
      
    />
       
      </Grid>
      <Grid item lg={6} md={4} sm={6} xs={12}>
      <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-native-simple">Active</InputLabel>
      <Select required
        native
        placeholder="Select Status"
        value={locationCreationData.active}
        name="active"
        onChange={handleChange}
        input={<FilledInput name="age" id="filled-age-native-simple"
          classes={{            
          input: classes.StatusSelect,
        }} />}
      >
        <option value="" />
        <option value={true}>Yes</option>
        <option value={false}>No</option>
        
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
                      locationCreationData.name.length === 0 || locationCreationData.active.length === 0 || locationCreationData.type.length === 0
                    }
                    onClick={createLocation }
                      
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
