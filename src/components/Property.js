

import React from 'react'
import {Button} from './Button'
import { Navigate, useNavigate } from 'react-router-dom';
export const Property = ({type, propertyOwner, description,_id}) => {

  const navigate = useNavigate();

  const id =0;

  const HandleOnClick= (e) => {
   
    e.preventDefault();

    navigate(`/DetailsPage/${_id}`, {

      state: {

        id: _id,

      }
    });

  }

  const HandleOnUpdateClick = (e) => {

    e.preventDefault();

    navigate(`/UpdateRecord/${_id}`, {

      state: {

        id: _id,
      }
    })
  }


  return (
    <div className='p-3' style={{width: "380px"}}>
    <div className="card mb-3 ml-200 fw-bold text-white " style= {{backgroundColor: "#2b707a"}}>
      <div className="card-header bg-transparent border-success">{type}</div>
      <div className="card-body  text-white">
        <h5 className="card-title"><p>Owner: {propertyOwner} </p></h5>
        <p className="card-text">Description: {description}</p>
      </div>
      <div className="card-footer bg-transparent border-success">

       <div className='d-flex flex-row'>
       <Button buttonId="btn" value= "View More" HandleOnClick = {(e)=> HandleOnClick(e)}/>
       <Button buttonId="btn" value= "Update" HandleOnClick = {(e)=> HandleOnUpdateClick(e)}/>
       </div>
       
      </div>
    </div>
    </div>
  )
}
