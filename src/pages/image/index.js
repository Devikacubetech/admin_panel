import axios from 'axios';
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
const Images = dynamic(import('../../../Components/images/Images'));

export default function ImagesPage() {
    const [GetImages, setImages] = useState([]);
    const getimages = () => {
        axios.get('http://localhost:5000/api/website/image').then((result) => {
            setImages(result.data.Data);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getimages();
    }, [])
    return (
        <Images GetImages={GetImages}/>
    )
}
