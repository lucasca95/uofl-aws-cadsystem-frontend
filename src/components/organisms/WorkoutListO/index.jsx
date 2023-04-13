import React from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { Button, Paper, Table, TableBody, TableHead, TableCell, TableContainer, TableRow } from "@mui/material";


function WorkoutListO({data}) {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleButton = (event) => {
        navigate(`/workout/${event.target.id}`);
    }

    return (
        <div className={classes.root}>
            {(data.length === 0) ?
                <p>No data available at this time.</p>
                :
                <div>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: "400px", overflowX: 'hidden' }}>
                        <Table stickyHeader sx={{ minWidth: 700 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Workout ID</TableCell>
                                    <TableCell>File Extension</TableCell>
                                    <TableCell style={{paddingLeft: 60}}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item,i)=>{
                                    return <TableRow 
                                        key={i}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell style={{paddingLeft: 50}} component="th" scope="row">{item.id}</TableCell>
                                            <TableCell style={{paddingLeft: 50}} component="th" scope="row">{item.extension}</TableCell>
                                            <TableCell style={{paddingLeft: 50}} component="th" scope="row">
                                                <Button id={item.id} onClick={handleButton}>VIEW</Button>
                                            </TableCell>
                                    </TableRow>;
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Paper>
                </div>
            }
        </div>
    );
}
export default WorkoutListO;