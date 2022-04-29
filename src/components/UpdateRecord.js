import React ,{useState,useEffect}from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Input } from './Input';
import { Button } from './Button';
import { Navigate } from 'react-router-dom';

export const UpdateRecord = () => {

    const BASEURL = "https://sfc-lekki-property.herokuapp.com/api";
    const URL = "/v1/lekki/property/";
    const params = useParams();

    const navigate = useNavigate();
    const [searchValueId, setSearchValue] = useState('');

    const [address, setAddress] = useState("")
    const [type, setType] = useState("")
    const [bedroom, setBedroom] = useState()
    const [sittingRoom, setSittingroom] = useState()
    const [kitchen, setKitchen] = useState()
    const [bathroom, setBathroom] = useState()
    const [toilet, setToilet] = useState()
    const [propertyOwner, setPropertyOwer] = useState("")
    const [description, setDescription] = useState("")
    const [validFrom, setValidFrom] = useState("")
    const [validTo, setValidTo] = useState("")
    const [images, setImages] = useState(["filaname"])

    const [data, setData] = useState({})

 
    useEffect(()=> {

        axios.get(BASEURL+ URL + params.id)
            .then((response)=> {
            
                console.log(response.data.data)
               setAddress(response.data.data.address)
               setType(response.data.data.type)
               setBedroom(response.data.data.bedroom)
               setSittingroom(response.data.data.sittingRoom)
               setKitchen(response.data.data.kitchen)
               setBathroom(response.data.data.bathroom)
               setToilet(response.data.data.toilet)
               setPropertyOwer(response.data.data.propertyOwner)
               setDescription(response.data.data.description)
               setValidFrom(response.data.data.validFrom)
               setValidTo(response.data.data.validTo)
            })
    
        if(searchValueId!=null) {
    
          setSearchValue('')
        }

    },[])

    const HandleOnClick=(e)=> {

        e.preventDefault();

        axios.patch(BASEURL+ "/v1/lekki/property/"+params.id, {

            "bedroom" : bedroom,
             "sittingRoom" : sittingRoom,
             "kitchen": kitchen,
             "bathroom": bathroom,
             "toilet": toilet,
             "description": description,
             "validTo" : validTo,
        })
            .then((response)=> {
    
               alert("Updated Successfully...")
               navigate("/")
            })
    }

    const HandleGoBack = (e) => {

        navigate("/")
    }
  return (
      <div>
            <Button 
                buttonId="btn" 
                value= "Go Back"
                HandleOnClick={(e)=>HandleGoBack(e)}
            />
    <div className='add-property'>

         

          <div className='d-flex flex-row'>
          <p className='text-white mt-4'>Enter bedroom</p>
            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter bedroom"
                HandleOnChange={(e) => setBedroom(e.target.value)}
                search="number"
                searchValue={bedroom}
            />

            </div>

            <div className='d-flex flex-row'>
            <p className='text-white mt-4'> Enter Sitting Room</p>
            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter sittingroom"
                HandleOnChange={(e) => setSittingroom(e.target.value)}
                search="number"
                searchValue={sittingRoom}
            />
            </div>

            <div className='d-flex flex-row'>
            <p className='text-white mt-4'> Enter kitchen</p>
            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter kitchen"
                HandleOnChange={(e) => setKitchen(e.target.value)}
                search="number"
                searchValue={kitchen}
            />
          </div>

          <div className='d-flex flex-row'>
          <p className='text-white mt-4'> Enter Bathroom</p>
            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter bathroom"
                HandleOnChange={(e) => setBathroom(e.target.value)}
                search="number"
                searchValue={bathroom}
            />
           </div>
           <div className='d-flex flex-row'>
           <p className='text-white mt-4'> Enter Toilet</p>
            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter toilet"
                HandleOnChange={(e) => setToilet(e.target.value)}
                search="number"
                searchValue={toilet}
            />
            </div>

            <div className='d-flex flex-row'>
            <p className='text-white mt-4'> Enter Description</p>
            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter description"
                HandleOnChange={(e) => setDescription(e.target.value)}
                search="text"
                searchValue={description}
            />
            </div>

        
            <div className='d-flex flex-row'>
            <p className='text-white mt-4'> Enter Valid To</p>

            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter valid to"
                HandleOnChange={(e) => setValidTo(e.target.value)}
                search="date"
                searchValue={validTo}
            />

            </div>

            <Button 
                buttonId="btn" 
                value= "Submit"
                HandleOnClick={(e)=>HandleOnClick(e)}
            />
       

            </div>
        </div>
  )
}
