import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import useStyles from "./styles";

import { Button, CircularProgress, Input } from '@mui/material';
import WorkoutListO from '../../organisms/WorkoutListO';

import { useForm } from 'react-hook-form';


function WorkoutsT({ loading, data = [], uploadFiles=()=>{}, uploading=false }) {
    const classes = useStyles();
    const { formState: { errors }, register, handleSubmit, resetField } = useForm();
    const [HRFile, setHRFile] = useState(null);
    const [HRFileName, setHRFileName] = useState('');
    const [THFile, setTHFile] = useState(null);
    const [THFileName, setTHFileName] = useState('');

    const onSubmit = (data) => {
        uploadFiles(data.hr, data.th);
        resetField('HRFile');
        setHRFile(null);
        setHRFileName('');
        setTHFile(null);
        resetField('THFile');
        setTHFileName('');

    };

    const handleHRChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile.type === 'text/csv') {
            setHRFileName(selectedFile.name);
            setHRFile(selectedFile);
        } else {
            alert('Please select a CSV file for HR data.');
        }
    };

    const handleTHChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile.type === 'text/csv') {
            setTHFileName(selectedFile.name);
            setTHFile(selectedFile);
        } else {
            alert('Please select a CSV file for TH data.');
        }
    };

    useEffect(() => {
    }, [])

    return <Layout>
        {
            loading
                ?
                <div>
                    <CircularProgress color="inherit" /></div>
                :
                <div>
                    <h1>Upload a workout</h1>

                    {uploading ? 
                        <>Great! Now please wait until we upload your workout data.</>: 
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div style={{marginBottom: 10}}>
                                <Input
                                    className={classes.input}
                                    id='hr-file-input'
                                    type='file'
                                    name='HRFile'
                                    accept='.csv'
                                    {...register('hr', { 
                                        required: true,
                                        onChange: (e) => {handleHRChange(e)}
                                    })}
                                />
                                {errors.hr && <p>Please select a CSV file for HR data.</p>}
                                <label htmlFor="hr-file-input">
                                    <Button variant="contained" color="primary" component="span">
                                        Select HR CSV file
                                    </Button>
                                    {HRFileName && <span>&emsp;{HRFileName} loaded</span>}
                                </label>
                            </div>
                            <div>
                                <Input
                                    className={classes.input}
                                    id='th-file-input'
                                    type='file'
                                    name='THFile'
                                    accept='.csv'
                                    {...register('th', { 
                                        required: true,
                                        onChange: (e) => {handleTHChange(e)}

                                    })}
                                />
                                {errors.th && <p>Please select a CSV file for th data.</p>}
                                
                                <label htmlFor="th-file-input">
                                    <Button variant="contained" color="primary" component="span">
                                        Select TH CSV file
                                    </Button>
                                    {THFileName && <span>&emsp;{THFileName} loaded</span>}
                                </label>
                                <div style={{marginTop: 10}}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        disabled={!HRFile || !THFile}
                                        >
                                        Upload Files
                                    </Button>
                                </div>
                            </div>
                        </form>
                    }
                    

                    <h1>Workouts in the system</h1>
                    <div>
                        <WorkoutListO data={data} />
                    </div>
                </div>
        }
    </Layout>
}

export default WorkoutsT;