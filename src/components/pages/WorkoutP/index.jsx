import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import WorkoutT from '../../templates/WorkoutT';
import fileDownload from "js-file-download";


import WorkoutService from '../../../services/WorkoutService';

function WorkoutP({}){
    const [loading, setLoading] = useState(true);
    const [loadingHR, setLoadingHR] = useState(true);
    const [loadingTH, setLoadingTH] = useState(true);
    const [HRdata, setHRData] = useState([]);
    const [THdata, setTHData] = useState([]);
    const { workout_id } = useParams();

    const callFunctions = ()=>{
        getWorkoutHRData();
        setTimeout(()=>{
            getWorkoutTHData();
        }, 100);
    }
    const getWorkoutHRData = () =>{
        WorkoutService.getWorkoutHRGET(workout_id)
        .then((res)=>{
            setHRData(res.data);
        })
        .catch(error=>{console.log(error)})
        .then(()=>{
            setLoadingHR(false);
        })
    }

    const getWorkoutTHData = () =>{
        WorkoutService.getWorkoutTHGET(workout_id)
        .then((res)=>{
            setTHData(res.data);
        })
        .catch(error=>{console.log(error)})
        .then(()=>{setLoadingTH(false)})
    }

    const handleDownloadZip = (workout_id=null) => {
        setLoading(true);
        WorkoutService.downloadWorkoutGET(workout_id)
        .then((res)=>{
            console.log(res);
            fileDownload((res.data), `workout_data_${workout_id}.zip`);
        })
        .catch((error)=>{
            console.warn(error);
        })
        .then(()=>{
            setLoading(false);
        });
    };

    useEffect(()=>{
        callFunctions();
        setLoading(false);
    },null)

    return (
        <WorkoutT 
            loading={loading} 
            loadingHR={loadingHR} 
            loadingTH={loadingTH} 
            HRdata={HRdata} 
            THdata={THdata}
            workout_id={workout_id}
            handleDownloadZip={handleDownloadZip}
        />
    );
}

export default WorkoutP;