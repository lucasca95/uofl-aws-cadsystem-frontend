import React, { useRef } from "react";
import {useForm} from 'react-hook-form';
import Layout from "../Layout";
import {InputBase} from '@mui/material';
import useStyles from "./styles";
import ImagesSearchO from "../../organisms/ImageSearcherO";

function MainTemplate(props) {
    const {register, handleSubmit, resetField} = useForm();
    const classes = useStyles();

    const onSubmit = (data) => {
        props.updateImg(data);
        resetField('file');
        // resetField('email');
    };

    return (
        <Layout>
            <div className={classes.root}>
                <h3>Choose a file to upload</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.form}>
                        <div>
                            Email&emsp;
                            <InputBase className={classes.formEmailInput}
                                type="email" {...register("email", 
                                                { required: true})}
                                name="email"/>
                        </div>
                        <InputBase type="file" {...register("file", { required: true})} name="file"/>
                        <button>Upload</button>
                    </div>
                </form>
                <div><br/></div>
                <div>
                    <ImagesSearchO searchImg={props.searchImg}/>
                </div>
                {/* <div className={classes.imagesList}>
                    <ImagesListO />
                </div> */}
            </div>
        </Layout>
    );
}
export default MainTemplate;