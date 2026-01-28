
import DrawerMenu from "../DrawerMenu/DrawerMenu.tsx"
import { DataGrid } from '@mui/x-data-grid';
import {Box,Stack, Typography ,Card , CardContent,CardActionArea,Grid, Paper} from "@mui/material"
function Home(){
    const cards = [
  {
    id: 1,
    title: 'Total Students',
    description: ' 30',
  },
  {
    id: 2,
    title: 'Total Teachers',
    description: '5',
  },
  {
    id: 3,
    title: ' Monthly revenue',
    description: '26000',
  },
  {
    id: 4,
    title: 'Pending fees',
    description: '6000',
  },
];

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
const grid = [
    {
        id:1,
        name: 'Grid 1',
        row : rows,
        column : columns
    },
    {
        id:2,
        name: 'Grid 2',
        row : rows,
        column : columns
    }
]
    return(
        <>
            <DrawerMenu view='Dashboard'/>
        <Box>

            
             <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
                    gap: 2,
                }}
                >
                {cards.map((card, index) => (
                    <Card key={card.id}>
                    
                        <CardContent  sx={{
                                    alignItems:'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    margin:"10px",
                                    xs:6
                                }}>
                        <Typography variant="h3" component="div">
                            {card.title}
                        </Typography>
                        <br/>
                        <Typography variant="h4" color="text.secondary">
                            {card.description}
                        </Typography>
                        </CardContent>
                  
                    </Card>
                ))}
            </Box>
           
           
           
             <Grid container>
                 {grid.map((grid, index) => (
                <Grid size={{xs:12,md:6}} p={2}>
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
                            <Typography variant="h3" component="div">
                            { grid.name}
                            </Typography>
                        
                            <br/>
                            <DataGrid
                                rows={grid.row}
                                columns={grid.column}
                                initialState={{
                                pagination: {
                                    paginationModel: {
                                    pageSize: 20,
                                    },
                                },
                                }}
                                pageSizeOptions={[5]}
                                checkboxSelection
                                disableRowSelectionOnClick
                            />
                            </Stack>
                        </Box>
                        
                    </Paper>
                </Grid>
                
                 ))}
            </Grid>
           
        </Box>
        </>
    )
}
export default Home