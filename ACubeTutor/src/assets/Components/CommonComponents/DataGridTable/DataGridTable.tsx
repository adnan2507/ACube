import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {Box, Typography,Stack,Grid,Paper} from "@mui/material"
function DataGridTable(props:any) {
  return (
   <Grid container>
                 
                <Grid size={{xs:12,md:12}} p={2}>
                    <Paper elevation={2}>
                       
                        <Box 
                            sx={{   display:'flex',
                                    alignItems: "center",
                                    marginTop: 2,
                                    padding:2,
                                    m: 1 ,
                                    '&:hover': {
                                        backgroundColor: 'action.selectedHover',
                                    }
                                }}
                        >
                            <Stack direction={'column'}>
                            <Typography variant="h6" component="div">
                            {props.name}
                            </Typography>
                        
                            <br/>
                            <DataGrid
                                rows={props.rows}
                                columns={props.columns}
                                initialState={{
                                pagination: {
                                    paginationModel: {
                                    pageSize: 5,
                                    },
                                },
                                }}
                                pageSizeOptions={[5]}
                                
                                disableRowSelectionOnClick
                            />
                            </Stack>
                        </Box>
                    </Paper>
                </Grid>
                
                
            </Grid>
  )
}

export default DataGridTable
