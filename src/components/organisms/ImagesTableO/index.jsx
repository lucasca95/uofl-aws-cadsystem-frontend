import { Button, Collapse, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ImagesTableRowM from '../../molecules/ImageTableRowM';
import useStyles from './styles';

function ImagesTableO({images=[], handleDownloadFiles}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.table}>
                <TableContainer 
                    component={Paper}
                >
                    <Table
                        sx={{ minWidth: 850 }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Confirmation code</TableCell>
                                <TableCell align="center">Image name</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {images.map((row) => (
                            <ImagesTableRowM key={row.id} row={row} handleDownloadFiles={handleDownloadFiles}/>
                            // <TableRow
                            // key={row.id}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            // >
                            //     <TableCell 
                            //         width={'25%'} 
                            //         align="center"
                            //         component="th" scope="row">
                            //         {row.id}
                            //         </TableCell>
                            //     <TableCell 
                            //         width={'45%'} 
                            //         align="center" component="th" scope="row">
                            //         {row.name}
                            //     </TableCell>
                            //     <TableCell 
                            //         width={'20%'}
                            //         align="center"
                            //         component="th" scope="row">
                            //         <Button>OPEN</Button>
                            //     </TableCell>
                            // </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
export default ImagesTableO;