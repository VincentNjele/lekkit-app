import { Button } from './components/Button';
import React, { useEffect, useState } from 'react'
import { Input } from './components/Input';
import { Property } from './components/Property';
import { Navigate, useNavigate } from 'react-router-dom';




export const ComponentsHolder = () => {

  const [Data, setData] = useState()
  const [searchedData, setSearchedData] = useState();
  const navigate = useNavigate();

  const [searchValueId, setSearchValue] = useState('');

  const BASEURL = "https://sfc-lekki-property.herokuapp.com/api";
  const URL = "/v1/lekki/property/";

  const LekkitImage = "https://res.cloudinary.com/moyinoluwa/image/upload/v1642090750/";

  console.log(Data)
  useEffect(() => {
    fetch(BASEURL + URL)
      .then(data => data.json())
      .then((res) => (setData(res)

      )
      )
  }, [])

  const HandleSubmit = (e) => {

    e.preventDefault();
    fetch(BASEURL + URL+ searchValueId)
    .then(data => data.json())
    .then((res) => (setSearchedData(res)
      
    )
    )

    if(searchValueId!=null) {

      setSearchValue('')
    }
  }

  const HandleOnChange = (e) => {

    setSearchValue(e.target.value)

    console.log(searchValueId)

  }

  const HandleOnClick= (e) => {
   
     e.preventDefault();
     navigate("/AddProperty")
  }

  const HandleUploadImage = (e) => {

    navigate('/UpdloadImage');
  }

  return (

    <div  className='content-wrapper'>

    <div className='d-flex flex-row px-1'>
      <Button  buttonId="add-btn" value= "Add Property" HandleOnClick = {(e)=> HandleOnClick(e)}/>
      <Button  buttonId="add-btn-upload" value= "Upload Image" HandleOnClick = {(e)=> HandleUploadImage(e)}/>
    </div>
             <Input
                searchId="search"
                search="search"
                placeholder="Enter Search Id"
                HandleOnChange={(e) => HandleOnChange(e)}
                HandleSubmit={HandleSubmit}
                searchValue={searchValueId}
                input = "input"
              />
    <div className='d-flex flex-wrap ml-2'>
    

      {
        searchedData==null? Data?.data.map((item, index) => (

         <Property key={index}  {...item}/>
        
        )): <Property {...searchedData?.data}/>
      }
    </div>
      


    </div>
  )
}
