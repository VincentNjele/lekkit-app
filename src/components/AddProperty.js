import React, { useState } from 'react'
import { Input } from './Input'
import { Button } from './Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AddProperty = () => {

    const navigate = useNavigate();
    const BASEURL = "https://sfc-lekki-property.herokuapp.com/api";
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


const HandleSetData = () => {

    setData({
        "address": `${address}`,
        "type": "rent",
        "bedroom" : 2,
         "sittingRoom" : 2,
         "kitchen": 2,
         "bathroom": 2,
         "toilet": 1,
         "propertyOwner": "Vincent",
         "description": "perfect",
         "validFrom": "2022-05-20",
         "validTo" : "2022-05-29",
         "images" : [
           "filename"
         ]}
        )

}


   const HandleOnClick = (e) => {

    
    e.preventDefault();

   
         HandleSetData();
        console.log(data)



        axios.post(BASEURL+ "/v1/lekki/property", {

        "address": address,
        "type": type,
        "bedroom" : bedroom,
         "sittingRoom" : sittingRoom,
         "kitchen": kitchen,
         "bathroom": bathroom,
         "toilet": toilet,
         "propertyOwner": propertyOwner,
         "description": description,
         "validFrom": validFrom,
         "validTo" : validTo,
         "images" : [
           "filename"
         ]})
        .then((response)=> {

            alert("Property Added successfully")
            navigate("/")
        })


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
        <div className='add-property'>
             <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter address"
                HandleOnChange={(e) => setAddress(e.target.value)}
                search="text"
                searchValue={address}
            />
            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter type"
                HandleOnChange={(e) => setType(e.target.value)}
                search="text"
                searchValue={type}
            />
            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter bedroom"
                HandleOnChange={(e) => setBedroom(e.target.value)}
                search="number"
                searchValue={bedroom}
            />

            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter sittingroom"
                HandleOnChange={(e) => setSittingroom(e.target.value)}
                search="number"
                searchValue={sittingRoom}
            />
            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter kitchen"
                HandleOnChange={(e) => setKitchen(e.target.value)}
                search="number"
                searchValue={kitchen}
            />

            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter bathroom"
                HandleOnChange={(e) => setBathroom(e.target.value)}
                search="number"
                searchValue={bathroom}
            />

            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter toilet"
                HandleOnChange={(e) => setToilet(e.target.value)}
                search="number"
                searchValue={toilet}
            />

            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter property owner"
                HandleOnChange={(e) => setPropertyOwer(e.target.value)}
                search="text"
                searchValue={propertyOwner}
            />

            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter description"
                HandleOnChange={(e) => setDescription(e.target.value)}
                search="text"
                searchValue={description}
            />

            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter valid from"
                HandleOnChange={(e) => setValidFrom(e.target.value)}
                search="date"
                searchValue={validFrom}
            />

            <Input
                searchId="addItem"
                input="inputs-wrapper"
                placeholder="Enter valid to"
                HandleOnChange={(e) => setValidTo(e.target.value)}
                search="date"
                searchValue={validTo}
            />
            <Button 
                buttonId="btn" 
                value= "Submit"
                HandleOnClick={(e)=>HandleOnClick(e)}
            />
       
            </div>
            
        </div>
    )
}
