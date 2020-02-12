import React from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";


const datatableData = [
  ["Joe James", "Example Inc.", "Yonkers", "Role2"],
  ["John Walsh", "Example Inc.", "Hartford", "Role1"],
  ["Bob Herm", "Example Inc.", "Tampa", "Role1"],
  ["James Houston", "Example Inc.", "Dallas", "Role3"],
  ["Prabhakar Linwood", "Example Inc.", "Hartford", "Role1"],
  ["Kaui Ignace", "Example Inc.", "Yonkers", "Role1"],
  ["Esperanza Susanne", "Example Inc.", "Hartford", "Role1"],
  ["Christian Birgitte", "Example Inc.", "Tampa", "Role2"],
  ["Meral Elias", "Example Inc.", "Hartford", "Role1"],
  ["Deep Pau", "Example Inc.", "Yonkers", "Role1"],
  ["Sebastiana Hani", "Example Inc.", "Dallas", "Role2"],
  ["Marciano Oihana", "Example Inc.", "Yonkers", "Role1"],
  ["Brigid Ankur", "Example Inc.", "Dallas", "Role1"],
  ["Anna Siranush", "Example Inc.", "Yonkers", "Role3"],
  ["Avram Sylva", "Example Inc.", "Hartford", "Role1"],
  ["Serafima Babatunde", "Example Inc.", "Tampa", "Role3"],
  ["Gaston Festus", "Example Inc.", "Tampa", "Role2"],
];

export default function UsersList() {
  return (
    <>
      <PageTitle title="Users List" />
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Users Table"
            data={datatableData}
            columns={["UserName", "Department", "Email ID", "Role" ]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        
      </Grid>
    </>
  );
}
