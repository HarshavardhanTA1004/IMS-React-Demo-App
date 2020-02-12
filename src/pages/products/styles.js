import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    StatusSelect: {
        padding: 14,
        paddingRight: 5,
        width: 205,
        paddingTop: 40,
        background: "white", 
      },
      ManufacturerSelect: {
        padding: 14,
        paddingRight: 5,
        width: 255,
        paddingTop: 40,
        background: "white", 
        borderBottomColor: theme.palette.primary.light,
      },
      mainChartLegentElement: {
        fontSize: "18px !important",
        marginLeft: theme.spacing(1),
      },
      textFieldUnderline: {
        "&:before": {
          borderBottomColor: theme.palette.primary.light,
        },
        "&:after": {
          borderBottomColor: theme.palette.primary.main,
        },
        "&:hover:before": {
          borderBottomColor: `${theme.palette.primary.light} !important`,
        },
      },
      textField: {
        borderBottomColor: "white",
        width: 255,
        background: "white", 
      },
      allContainer: {
        boxShadow: theme.customShadows.widget,
        overflow: "hidden",
        padding: theme.spacing(3),
      },
    }));