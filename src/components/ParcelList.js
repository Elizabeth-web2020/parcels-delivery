import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const ParcelList = () => {

  const { parcels, removeParcel } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
      {parcels.length > 0 ? (
        <>
          {parcels.map(parcel => (
            <ListGroupItem className='d-flex' key={parcel.id}>
              <div className='parcel-item'>{parcel.item}</div>
              <div className='parcel-city-from ml-5'>{parcel.from}</div>
              <div className='parcel-city-to ml-5'>{parcel.to}</div>
              <div className='parcel-date ml-5'>{parcel.date}</div>
              <div className='parcel-desc ml-5'>{parcel.description}</div>
              <div className='ml-auto ml-5'>
                <Link className='btn btn-warning mr-2' to={`/edit/${parcel.id}`}>Edit</Link>
                <Button onClick={() => removeParcel(parcel.id)} color='danger'>Delete</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className='text-center'>No Parcels</h4>
      )}
    </ListGroup>
  );
}

export default ParcelList;
