import React from 'react'
import {Button} from './Button'

export const DetailsDisplay = ({description,type,address, propertyOwner,
toilet, sittingRoom,bedroom,kitchen}) => {
  return (

    <div className='display-details' style={{width: "580px"}}>
    <div className="card mb-3 ml-200 fw-bold text-white " style= {{backgroundColor: "#2b707a"}}>
      <div className="card-header bg-transparent border-success"><p>Type: {type} </p></div>
      <div className="card-body  text-white">
        <h5 className="card-title"><p>Owner: {propertyOwner} </p></h5>
        <p className="card-text">Description: {description}</p>
        <p className="card-text">Address: {address}</p>
        <p className="card-text">toilets: {toilet}</p>
        <p className="card-text">sittingRoom: {sittingRoom}</p>
        <p className="card-text">bedroom: {bedroom}</p>
        <p className="card-text">kitchen: {kitchen}</p>
      </div>
      <div className="card-footer bg-transparent border-success">
       
      </div>
    </div>
    </div>
  )
}
