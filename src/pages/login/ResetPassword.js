import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";


// styles
import useStyles from "./styles";


// context
import { useUserDispatch, loginUser } from "../../context/UserContext";

function ResetPassword(props) {
  var classes = useStyles();

  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);
 
  var [oldPassword, setOldPassword] = useState("");
  var [passwordValue, setPasswordValue] = useState("");

  const loginRedirect = (history) => {
    
      console.log("Here need to use axious and need to do POST")
      setTimeout(() => { 
        history.push('/login')
      }, 2000);

    
  }

  return (
    <Grid container className={classes.container}>
      
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
           
          </Tabs>
          {activeTabId === 0 && (
            <React.Fragment>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade>
              <TextField
                id="Opass"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={oldPassword}
                onChange={e => setOldPassword(e.target.value)}
                margin="normal"
                placeholder="Enter Current Password"
                type="OLDpassword"
                fullWidth
              />
              <TextField
                id="newpassword"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Set New Password"
                type="password"
                fullWidth
              />
              <div className={classes.formButtons}>
                {isLoading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
                    disabled={
                      loginValue.length === 0 || passwordValue.length === 0
                    }
                    onClick={() =>
                      loginUser(
                        userDispatch,
                        loginValue,
                        passwordValue,
                        props.history,
                        setIsLoading,
                        setError,
                      )
                    }
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Submit
                  </Button>
                )}
                <Button
                  color="primary"
                  size="large"
                  className={classes.forgetButton}
                  onClick= {() => resetPasswordRedirect(props.histroy)}
                >
                  Login
                </Button>
              </div>
            </React.Fragment>
          )}
          
        </div>        
      </div>
    </Grid>
  );
}

export default withRouter(ResetPassword);
