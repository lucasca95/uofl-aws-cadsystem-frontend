import { Button, Collapse, TableCell, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import useStyles from './styles';

function ImagesTableRowM({row=null, handleDownloadFiles}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    let backgroundColor = (open) ? 'rgb(180,30,30,.15)' : 'rgb(255,255,255, 1)';

    const handleOpenClick = () => {
        setOpen(!open);
    };
    const handleDownloadButton = (item) => {
        console.log(item);
        handleDownloadFiles(item.target.value);
    };

    return (
        <>
            <TableRow
            key={row.id}
            sx={{ 
                backgroundColor: backgroundColor,
                '& > *': { borderBottom: 'unset' } 
            }}
            >
                <TableCell
                    width={'25%'} 
                    align="center"
                    component="th" scope="row">
                    {row.id}
                    </TableCell>
                <TableCell 
                    width={'45%'} 
                    align="center" component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell 
                    width={'20%'}
                    align="center"
                    component="th" scope="row">
                    <Button onClick={()=>{handleOpenClick()}}>
                        {open ? <>CLOSE</> : <>OPEN</>}
                    </Button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box>
                            <Typography variant='h5'>
                                Result details
                            </Typography>
                            <div className={classes.resultDetails}>
                                <div>
                                    <div>Prediction&emsp; {(row.predictionLevel)?<>{row.predictionLevel}</>:<i>Not ready yet</i>}</div>
                                    <div>Detection &emsp; {(row.detection)?<>{row.detection}</>:<i>Not ready yet</i>}</div>
                                    <div>Pathology &emsp; {(row.pathology)?<>{row.pathology}</>:<i>Not ready yet</i>}</div>
                                    <div>Birads score &emsp; {(row.biradsScore)?<>{row.biradsScore}</>:<i>Not ready yet</i>}</div>
                                    <div>Shape &emsp; {(row.shape)?<>{row.shape}</>:<i>Not ready yet</i>}</div>
                                </div>
                                <Button 
                                    disabled={row.shape ? false : true}
                                    onClick={handleDownloadButton} 
                                    value={row.id} variant="outlined" className={classes.downloadButton}>Download files</Button>
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}
export default ImagesTableRowM;