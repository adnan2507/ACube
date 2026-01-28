import React from 'react'
import DrawerMenu from "../DrawerMenu/DrawerMenu.tsx"
import DateSelector from "../CommonComponents/DateSelector/DateSelector.tsx"

import {Box, Typography, Button,Stack,Grid,Paper,CardActionArea,Dialog , DialogTitle,DialogContent,TextField,DialogActions,MenuItem} from "@mui/material"
import DataGridTable from '../CommonComponents/DataGridTable/DataGridTable.tsx'

const Students = () => {
 const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
const classes =[
  {
    value : '1',
    label : '1st std'
  },
  {
    value : '2',
    label : '2nd std'
  },
  {
    value : '3',
    label : '3rd std'
  },
  {
    value : '4',
    label : '4th std'
  },
  {
    value : '5',
    label : '5th std'
  },
  {
    value : '6',
    label : '6th std'
  },
  {
    value : '7',
    label : '7th std'
  },
  {
    value : '8',
    label : '8th std'
  },
  {
    value : '9',
    label : '9th std'
  },
  {
    value : '10',
    label : '10th std'
  },
  
]
  return (
     <>
     <DrawerMenu view='Students'/>
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
              Student Management
            </Typography>
            <Typography variant='subtitle1' color='grey'>
              Manage Student reord and information
            </Typography>
          </Stack>
          <Button variant='contained' onClick={handleClickOpen}> Add Student</Button>
           <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Add Student Info"}
            </DialogTitle>
            <DialogContent>
              <Grid container marginTop={1} rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                <Grid size={6}>
                   <TextField fullWidth id="StudentName" label="Student Name" variant="outlined" />
                </Grid>
                <Grid size={6}>
                 
                 <TextField
                    fullWidth
                    id="outlined-select-classes"
                    select
                    label="Select Class"
                    defaultValue="1st std"
                    
                  >
                    {classes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid size={6}>
                  <TextField fullWidth id="Contact" label="Contact No" variant="outlined" />
                </Grid>
                <Grid size={6}>
                   <TextField fullWidth id="GaurdianName" label="GaurdianName" variant="outlined" />
                </Grid>
                <Grid size={6}>
                   <TextField fullWidth id="MonthlyFee" label="MonthlyFee" variant="outlined" />
                </Grid>
                <Grid size={6}>
                  <DateSelector Label={'Addmision Date'}/>
                </Grid>
              </Grid>
             
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Submit
              </Button>
              <Button onClick={handleClose} autoFocus>
                close
              </Button>
            </DialogActions>
          </Dialog>
        </Stack>
        <DataGridTable name="Student Details" rows={rows} columns={columns}></DataGridTable>
    </Box>
    </>
  )
}

export default Students
