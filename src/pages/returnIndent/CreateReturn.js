import React, { useState } from "react";
import {
  Grid,
  TextField,
  Select,
  FilledInput,
  FormControl,
  InputLabel,
  Button,
 
} from "@material-ui/core";
// styles
import useStyles from "../../pages/products/styles";

// components
import PageTitle from "../../components/PageTitle";
export default function CreateReturn(props) {
  var classes = useStyles();
  
  // local
  var [statusValue, setStatusValue] = useState("");
  var [nameValue, setNameValue] = useState(""); 
  var [typeValue, setTypeValue] = useState("");  
  var [locationID, setLocationID] = useState("");
  var [descriptionValue, setDescriptionValue] = useState("");

  const locationCreation = (history) => {
    if(locationID.length !== 0 || statusValue.length !== 0 || typeValue.length !== 0){
      console.log("Here need to use axious and need to do POST")
      setTimeout(() => { 
        history.push('/app/returnIndent/ReturnList')
      }, 2000);

    }
  }

  return (
    <>
      <PageTitle title="Create Return"  />
      <Grid container spacing={2}>
        <Grid item lg={6} md={8} sm={6} xs={12}>
        <TextField required
        id="Locationid"
        label="Location ID"
        InputProps={{
          classes: {
            underline: classes.textFieldUnderline,
            input: classes.textField,
          },
        }}
        value={locationID}
        onChange={e => setLocationID(e.target.value)}
        margin="normal"
        placeholder="Enter Product Name"
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
        value={typeValue}
        onChange={e => setTypeValue(e.target.value)}
        input={<FilledInput name="age" id="filled-age-native-simple"
          classes={{            
          input: classes.ManufacturerSelect,
        }} />}
      >
        <option value="" />
        <option value={10}>Type1</option>
        <option value={20}>Type2</option>
        <option value={30}>Type3</option>
        <option value={40}>Type4</option>
      </Select>
    </FormControl>
      
        </Grid>

      </Grid>
      <Grid container spacing={2}>
  
      <Grid item lg={6} md={8} sm={6} xs={12}>
      <TextField  
      id="name"
      label="Location Name"
      InputProps={{
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        },
      }}
      value={nameValue}
      onChange={e => setNameValue(e.target.value)}
      margin="normal"
      placeholder="Enter Name"
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
        value={statusValue}
        onChange={e => setStatusValue(e.target.value)}
        input={<FilledInput name="age" id="filled-age-native-simple"
          classes={{            
          input: classes.StatusSelect,
        }} />}
      >
        <option value="" />
        <option value={10}>Yes</option>
        <option value={20}>No</option>
        
      </Select>
    </FormControl>
      </Grid>
    </Grid>   

    <Grid container spacing={2}>
  
      <Grid item lg={6} md={8} sm={6} xs={12}>
      <TextField  
      id="desc"
      label="Description"
      InputProps={{
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        },
      }}
      value={descriptionValue}
      onChange={e => setDescriptionValue(e.target.value)}
      margin="normal"
      placeholder="Description"
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
                        locationID.length === 0 || statusValue.length === 0 || typeValue.length === 0
                    }
                    onClick={() =>locationCreation(props.history) }
                      
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Create
                  </Button>
       
      </Grid>
      </Grid>
    </>
  );
}

