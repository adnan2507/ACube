import React from 'react'
import DrawerMenu from "../DrawerMenu/DrawerMenu.tsx"
import DateSelector from "../CommonComponents/DateSelector/DateSelector.tsx"

import {Box, Typography, Button,Stack,Grid,Paper,CardActionArea,Dialog , DialogTitle,DialogContent,TextField,DialogActions,MenuItem} from "@mui/material"
import DataGridTable from '../CommonComponents/DataGridTable/DataGridTable.tsx'
const Teachers = () => {

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
      field: 'Name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'Subject',
      headerName: 'Subject',
      width: 150,
      editable: true,
    },
    {
      field: 'Contact',
      headerName: 'Contact',
      width: 110,
      editable: true,
    },
    {
      field: 'Salery',
      headerName: 'Salery',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
  ];
  
  const rows = [
    { id: 1, Name: 'Sam', Subject: 'Maths', Contact: '8467866455' },
    { id: 2, Name: 'John', Subject: 'Science', Contact: '8317987661' },
    { id: 3, Name: 'Rahul', Subject: 'English', Contact: '7897951131' },
    { id: 4, Name: 'Patel', Subject: 'Kannada', Contact: '9774113116' },
    { id: 5, Name: 'Shinde', Subject: 'Maths', Contact: '9753113314' },
    { id: 6, Name: 'Ravi', Subject: 'Social Science', Contact: '8313131150' },
    { id: 7, Name: 'Raju', Subject: 'Hindi', Contact: '6421642144' },
    { id: 8, Name: 'Frances', Subject: 'Maths', Contact: '7654311366' },
    { id: 9, Name: 'Manoj', Subject: 'Science', Contact: '8323113659' },
   
  ];
  return (
    <>
     <DrawerMenu view='Teachers'/>
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
              Teacher Management
            </Typography>
            <Typography variant='subtitle1' color='grey'>
              Manage Teachers reords and information
            </Typography>
          </Stack>
          <Button variant='contained' onClick={handleClickOpen}> Add Teacher</Button>
           <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Add Teacher Info"}
            </DialogTitle>
            <DialogContent>
              <Grid container marginTop={1} rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                <Grid size={6}>
                   <TextField fullWidth id="TeacherName" label="Teacher Name" variant="outlined" />
                </Grid>
                <Grid size={6}>
                   <TextField fullWidth id="Subject" label="Subject" variant="outlined" />
                </Grid>
               
                <Grid size={6}>
                  <TextField fullWidth id="Contact" label="Contact No" variant="outlined" />
                </Grid>
                <Grid size={6}>
                  <TextField fullWidth id="email" label="Email Id" variant="outlined" />
                </Grid>
               
                <Grid size={6}>
                   <TextField fullWidth id="Salery" label="Salery" variant="outlined" />
                </Grid>
                <Grid size={6}>
                  <DateSelector Label={'Joining Date'}/>
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
        <DataGridTable name="Teacher Details" rows={rows} columns={columns}></DataGridTable>
    </Box>
    </>
  )
}

export default Teachers
