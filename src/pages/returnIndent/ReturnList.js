import React from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";


const datatableData = [
  ["ID00436", "Example Inc.", "Yes", "Type2"],
  ["ID04545", "Example Inc.", "No", "Type1"],
  ["ID006574", "Example Inc.", "Yes", "Type1"],
  ["ID00023", "Example Inc.", "Yes", "Type3"],
  ["ID000641", "Example Inc.", "No", "Type1"],
  ["ID00034", "Example Inc.", "Yes", "Type1"],
  ["ID000642", "Example Inc.", "No", "Type3"],
  ["ID0064", "Example Inc.", "No", "Type1"],
  ["ID00052", "Example Inc.", "Yes", "Type1"],
  ["ID00341", "Example Inc.", "Yes", "Type2"],
  ["ID0041", "Example Inc.", "No", "Type2"],
  ["ID0011", "Example Inc.", "Yes", "Type3"],
  ["ID0209", "Example Inc.", "Yes", "Type1"],
  ["ID00053", "Example Inc.", "Yes", "Type2"],
  ["ID0005", "Example Inc.", "Yes", "Type1"],
  ["ID00032", "Example Inc.", "Yes", "Type1"],
  ["ID00190", "Example Inc.", "Yes", "Type3"],
];

export default function ReturnList() {
  return (
    <>
      <PageTitle title="Return Indent List" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Return Indent List"
            data={datatableData}
            columns={["ID", "Name", "Active", "Type" ]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        
      </Grid>
    </>
  );
}
