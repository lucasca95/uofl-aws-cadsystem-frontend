import React, { useEffect, useState} from 'react';
import WorkoutsT from '../../templates/WorkoutsT';

import WorkoutService from '../../../services/WorkoutService';

function WorkoutsP({}){
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(100);
    const [paginator, setPaginator] = useState({});

    const getWorkouts = ()=>{
        WorkoutService.getWorkoutsGET(page, limit)
        .then((res)=>{
            setPaginator({
                current_page: res.current_page,
                results_per_page: res.results_per_page,
                total_pages: res.total_pages,
                total_workouts: res.total_workouts
            });
            setData(res.workouts);
        })
        .catch(error=>{
            console.log(error);
        })
        .then(()=>{
            setLoading(false);
        });
    }

    const uploadFiles = (hr, th)=>{
        setUploading(true);
        WorkoutService.sendWorkoutPOST({
            'hr': hr,
            'th': th
        })
        .then((data)=>{
            if(data.status !== 201){
                // console.warn(data);
                // alert('Something went wrong');
            } else {
                alert(`File has been uploaded successfully.
                Processing code: #${data.code}`);
            }
        })
        .catch((e)=>{
            console.log(e);
            alert(`An error has occurred in WorkoutService`);    
        })
        .then(()=>{
            setUploading(false);
            window.location.reload();
        });
    };

    useEffect(()=>{
        getWorkouts();
    },[])

    return (
        <WorkoutsT
            loading={loading}
            data={data}
            paginator={paginator}
            uploadFiles={uploadFiles}
            uploading={uploading}
        />
    );
}

export default WorkoutsP;