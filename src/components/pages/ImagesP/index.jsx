import React, { useEffect, useState } from 'react';
import { useStore } from '../../../common/Context';
import ImageService from '../../../services/ImageService';

import ImagesT from '../../templates/ImagesT';

function ImagesP(){
    const [{user}, dispatch] = useStore();
    const [imageList, setImageList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [messageInfo, setMessageInfo] = useState({code:0, text: ''});

    const uploadImg = (dat)=>{
        const image = dat.files[0];
        console.log(image);
        const data = {image, email: user.email}
        ImageService.sendImgPOST(data)
        .then((data)=>{
            if(data.status !== 200){
                console.warn(data);
                setMessageInfo({code: 2, text: 'Something went wrong'});
                alert('Something went wrong');
            } else {
                setMessageInfo({code: 1, text: `Success. Processing code: ${data.code}`});
                alert(`Image has been uploaded successfully.
                Processing code: #${data.code}`);
            }
        })
        .catch((e)=>{
            console.log(e);
            alert(`An error has occurred in ImageService`);    
        })
        .then(()=>{
            window.location.href='/';
        });
    };

    const loadUserImages = () => {
        setLoading(true);
        ImageService.imageListPOST(user.email)
        .then((response)=>{
            if (response.status === 200) {
                setImageList(response.images);
            }
        })
        .catch((error)=>{
            console.warn(error);
        })
        .then(()=>{
            setLoading(false);
        });
    };

    const handleDownloadFiles = (id=null) => {
        // console.log(`Going to download files for image ${id}`);
        setLoading(true);
        ImageService.searchImgPOST(id, user.email)
        .then((response)=>{
        })
        .catch((error)=>{
            console.warn(error);
        })
        .then(()=>{
            setLoading(false);
        });
    };

    useEffect(()=>{
        loadUserImages();
    },[]);

    return (
        <ImagesT
            loading={loading}
            imagesList={imageList}
            uploadImg={uploadImg}
            handleDownloadFiles={handleDownloadFiles}
        />
    )
}
export default ImagesP;