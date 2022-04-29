import React, { useState } from 'react'
import { Input } from './Input'
import { Button } from './Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




export const UploadImage = () => {

    const BASEURL = "https://sfc-lekki-property.herokuapp.com/api";
    const URL = "/v1/lekki/upload/";

    const navigate = useNavigate();

    const [file, setFile] = useState('');

    const HandleOnClick = () => {

        let formData = new FormData();

        formData.append("file", file)

       axios.post(BASEURL+URL,formData)
       .then((res)=> {
        
        alert("Uploaded successfully")
        navigate("/")

       })

    }

    const HandleFile = (e) => {

        let file = e.target.files[0]

        setFile(file)
    }

    const HandleGoBack = (e) => {

        navigate("/")
    }

    return (
        <div >

        <Button 
        buttonId="btn" 
        value= "Go Back"
        HandleOnClick={(e)=>HandleGoBack(e)}
    />
        <div className='upload-image'>
        
            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter bedroom"
                HandleOnChange={(e) => HandleFile(e)}
                search="file"
               searchValue={""}
            />

            <Button 
                buttonId="btn" 
                value= "Upload"
                HandleOnClick={(e)=>HandleOnClick(e)}
            />

            </div>
        </div>
    )
}
