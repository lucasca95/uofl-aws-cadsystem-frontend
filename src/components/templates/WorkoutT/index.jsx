import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2";
import Layout from '../Layout';
import useStyles from "./styles";

import { CircularProgress, Button, TextField } from '@mui/material';

function WorkoutT({
    loading = true,
    loadingHR = true,
    loadingTH = true,
    HRdata = [],
    THdata = [],
    workout_id = null,
    handleDownloadZip = () => { }
}) {
    const { register, handleSubmit, errors } = useForm();
    const classes = useStyles();
    const movingAverage = (data, windowSize) => {
        const movingAvg = [];
        for (let i = windowSize - 1; i < data.length; i++) {
            const window = data.slice(i - windowSize + 1, i + 1);
            const average = window.reduce((a, b) => a + b) / windowSize;
            movingAvg.push(average);
        }
        return movingAvg;
    }

    const [HRWindowSize, setHRWindowSize] = useState(25);
    const processed_HR_data = HRdata.reverse().map((item, i) => {
        return item.bpm
    });
    const processed_HR_data_len = processed_HR_data.length;

    const processed_TH_data = THdata.map((item, i) => {
        return item.temperature
    });

    const onSubmit = ({ numberInput }) => {
        if ((numberInput >= 1) && (numberInput <= processed_HR_data_len)) {
            setHRWindowSize(numberInput);
        }
    }
    const handleDownloadButton = (item) => {
        handleDownloadZip(item.target.value);
    };

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const HRoptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Heart Rate [bpm]',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    };
    const THoptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                // position: 'right',
            },
            title: {
                display: true,
                text: 'Temperature [°C]',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    };
    const chart_HR_data = {
        labels: HRdata.map((item, i) => { return i }),
        datasets: [
            {
                label: "bpm",
                data: processed_HR_data,
                borderColor: "rgb(250, 0, 0, 0.6)",
                pointStyle: false,
            },
            {
                label: "MA",
                data: movingAverage(processed_HR_data, HRWindowSize),
                borderColor: "rgb(153, 0, 204)",
                pointStyle: false,
                hidden: true,
            }
        ]
    };
    const chart_TH_data = {
        labels: THdata.map((item, i) => { return i }),
        datasets: [
            {
                label: "temperature",
                data: processed_TH_data,
                fill: false,
                tension: 0.1,
                borderColor: "rgb(100, 52, 192)",
                pointStyle: false,
            }
        ]
    };

    useEffect(() => {
    }, [])

    return <Layout>
        <div className={classes.root}>
            {
                loading
                    ?
                    <div><CircularProgress color="inherit" /></div>
                    :
                    <div>
                        <div className={classes.top}>
                                <h1>Workout #{workout_id} data</h1>
                                <Button onClick={handleDownloadButton} value={workout_id} variant="text" >
                                    Download workout
                                </Button>
                                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Button variant="text" >
                                        Go back home
                                    </Button>
                                </Link>
                        </div>
                        {loadingHR ?
                            <div><CircularProgress color="inherit" /></div> :
                            (HRdata.length === 0) ? <>Failure when displaying HR data</> :
                                <div>
                                    <form onSubmit={handleSubmit(onSubmit)} className={classes.centered}>
                                        <TextField
                                            label="Moving AVG window size"
                                            type="number"
                                            id="number"
                                            name="number"
                                            defaultValue={HRWindowSize}
                                            inputProps={{
                                                min: 1,
                                                max: processed_HR_data_len,
                                            }}
                                            {...register('numberInput', { required: true })}
                                        />
                                        {errors && <p>{errors.number.message}</p>}
                                        <Button type="submit" variant="contained" color="primary">
                                            Compute
                                        </Button>
                                    </form>
                                    <div className={classes.chartContainer}>
                                        <Line data={chart_HR_data} options={HRoptions} />
                                    </div>
                                </div>
                        }
                        <br />
                        {loadingTH ?
                            <div><CircularProgress color="inherit" /></div> :
                            (THdata.length === 0) ? <>Failure when displaying TH data</> :
                                <div className={classes.chartContainer}>
                                    <Line data={chart_TH_data} options={THoptions} />
                                </div>
                        }
                    </div>
            }
        </div>
    </Layout>
}

export default WorkoutT;