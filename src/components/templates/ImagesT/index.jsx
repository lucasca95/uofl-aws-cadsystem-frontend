import {Button, CircularProgress, Container, InputBase } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {useStore} from '../../../common/Context';
import Layout from '../Layout';
import useStyles from "./styles";
import ImagesTableO from '../../organisms/ImagesTableO';
import { useForm } from 'react-hook-form';

function ImagesT({loading, imagesList=[], uploadImg, handleDownloadFiles}) {
    const classes = useStyles();
    const {register, handleSubmit, resetField} = useForm();


    const onSubmit = (data) => {
        uploadImg(data.target);
        resetField('file');
        alert("Your image has been sent");
    };

    return (
        <Layout>
            <Container
                maxWidth={false}
                className={classes.root}
            >
                {(loading)?
                    <CircularProgress />
                :
                <div>
                    <br/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={classes.form}>
                            <InputBase
                                id="contained-button-file"
                                type="file" 
                                name="file" 
                                required 
                                {...register("file", {
                                    required: true,
                                    onChange: (e) => {onSubmit(e)}
                                })} 
                                style={{display: 'none'}}
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span">
                                    Click to upload and image
                                </Button>
                            </label>
                        </div>
                    </form>
                    <br/>
                    {(imagesList.length)
                    ?
                    <ImagesTableO className={classes.table}
                        images={imagesList}
                        handleDownloadFiles={handleDownloadFiles}
                    />
                    :
                    <div><i>There are no images to show</i></div>
                    }
                    
                </div>
                }
            </Container>
        </Layout>
    );
}
export default ImagesT;