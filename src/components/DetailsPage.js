import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Button} from './Button'
import { Property } from './Property'
import axios from 'axios'
import { DetailsDisplay } from './DetailsDisplay'

export const DetailsPage = () => {

    const params = useParams()
    const BASEURL = "https://sfc-lekki-property.herokuapp.com/api";
    const URL = "/v1/lekki/property/";
    const navigate = useNavigate();
    const [searchValueId, setSearchValue] = useState('');
    const [Data, setData] = useState()

    console.log(Data)
    useEffect(()=> {

        axios.get(BASEURL+ URL + params.id)
            .then((response)=> {
                 
                setData(response.data)
            })
          
        
    
        if(searchValueId!=null) {
    
          setSearchValue('')
        }

    },[])

    const HandleOnClick = (e) => {

        e.preventDefault();
        navigate("/")

    }

  return (
    
    <div>
    
            <Button 
                buttonId="btn" 
                value= "Go Back"
                HandleOnClick={(e)=>HandleOnClick(e)}
            />

    <div className='details-page'>
    {
       

         <DetailsDisplay  {...Data?.data}/>
        
      }
    </div>

    </div>
    
  )
}
