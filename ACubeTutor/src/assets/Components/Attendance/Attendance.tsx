import React from 'react'
import DrawerMenu from "../DrawerMenu/DrawerMenu.tsx"
import DateSelector from "../CommonComponents/DateSelector/DateSelector.tsx"

import {Box, Typography, Button,Stack,Grid,Paper,Dialog , DialogTitle,DialogContent,TextField,DialogActions,Tab,Tabs} from "@mui/material"
import DataGridTable from '../CommonComponents/DataGridTable/DataGridTable.tsx'
const Attendance = () => {
const [value, setValue] = React.useState('one');
  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };
  const columns: any = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
  return (
    <>
        <DrawerMenu view='Attendance'/>
        <Box>
      

        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Stack direction="column">
            <Typography variant='h4'>
              Attendance Management
            </Typography>
            <Typography variant='subtitle1' color='grey'>
              Manage Attendence of Teachers and students
            </Typography>
          </Stack>
           
        </Stack>
         <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Teachers" />
        <Tab value="two" label="Students" />
      </Tabs>
    </Box>
        <DataGridTable name="Attendance" rows={rows} columns={columns}></DataGridTable>
    </Box>
       </>
  )
}

export default Attendance
