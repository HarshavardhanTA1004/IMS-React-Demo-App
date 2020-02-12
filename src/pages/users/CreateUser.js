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
export default function CreateUser(props) {
  var classes = useStyles();
  
  // local
  var [userID, setUserID] = useState("");
  var [nameValue, setNameValue] = useState("");
  var [roleValue, setRoleValue] = useState("");
  var [departmentValue, setDepartmentValue] = useState("");
  var [displayNameValue, setDisplayNameValue] = useState("");
  var [cNumValue, setCNumValue] = useState("");
  var [emailValue, setEmailValue] = useState("");

  const createUserSubmit = (history) => {
    
      console.log("Here need to use axious and need to do POST")
      setTimeout(() => { 
        history.push('/app/users/UsersList')
      }, 2000);

    
  }

  return (
    <>
      <PageTitle title="Create User"  />
      <Grid container spacing={2}>
        <Grid item lg={6} md={8} sm={6} xs={12}>
        <TextField required
        id="Userid"
        label="User ID"
        InputProps={{
          classes: {
            underline: classes.textFieldUnderline,
            input: classes.textField,
          },
        }}
        value={userID}
        onChange={e => setUserID(e.target.value)}
        margin="normal"
        placeholder="Enter User ID"
        type="name"
        variant="filled"
        
      />
          
        </Grid>
        <Grid item lg={3} md={8} sm={6} xs={12}>
        <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-native-simple">Department</InputLabel>
      <Select required
        native
        placeholder="Select Department"
        value={departmentValue}
        onChange={e => setDepartmentValue(e.target.value)}
        input={<FilledInput name="department" id="filled-age-native-simple"
          classes={{            
          input: classes.ManufacturerSelect,
        }} />}
      >
        <option value="" />
        <option value={10}>Department1</option>
        <option value={20}>Department2</option>
        <option value={30}>Department3</option>
        <option value={40}>Department4</option>
      </Select>
    </FormControl>
      
        </Grid>

      </Grid>
      <Grid container spacing={2}>
  
      <Grid item lg={6} md={8} sm={6} xs={12}>
      <TextField  
      id="product-category"
      label="Name"
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
      type="name"
      variant="filled"
      
    />
       
      </Grid>
      <Grid item lg={6} md={4} sm={6} xs={12}>
      <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-native-simple">Role</InputLabel>
      <Select required
        native
        placeholder="Select Role"
        value={roleValue}
        onChange={e => setRoleValue(e.target.value)}
        input={<FilledInput name="age" id="filled-age-native-simple"
          classes={{            
          input: classes.StatusSelect,
        }} />}
      >
        <option value="" />
        <option value={10}>Role1</option>
        <option value={20}>Role2</option>
        <option value={30}>Role3</option>
      </Select>
    </FormControl>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
  
      <Grid item lg={6} md={8} sm={6} xs={12}>
      <TextField  
      id="contactNumber"
      label="Contact Number"
      InputProps={{
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        },
      }}
      value={cNumValue}
      onChange={e => setCNumValue(e.target.value)}
      margin="normal"
      placeholder="Enter Contact Number"
      type="sku"
      variant="filled"
      
    />
       
      </Grid>
      <Grid item lg={6} md={4} sm={6} xs={12}>
      <TextField  
      id="email"
      label="Email ID"
      InputProps={{
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        },
      }}
      value={emailValue}
      onChange={e => setEmailValue(e.target.value)}
      margin="normal"
      placeholder="Enter Display Name"
      type="dname"
      variant="filled"
      
    />
      </Grid>
    </Grid>

    <Grid container spacing={2}>
  
      <Grid item lg={6} md={8} sm={6} xs={12}>
      <TextField  
      id="d-name"
      label="Display Name"
      InputProps={{
        classes: {
          underline: classes.textFieldUnderline,
          input: classes.textField,
        },
      }}
      value={displayNameValue}
      onChange={e => setDisplayNameValue(e.target.value)}
      margin="normal"
      placeholder="Enter Display Name"
      type="dname"
      variant="filled"
      
    />
       
      </Grid>
      </Grid>
      <br></br>
       <Grid container spacing={4}>
  
      <Grid item lg={6} md={8} sm={6} xs={12}>
      <Button
                   
                    onClick={() =>createUserSubmit(props.history) }
                      
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Create
                  </Button>
       
      </Grid>
      </Grid>
    </>
  )
}

