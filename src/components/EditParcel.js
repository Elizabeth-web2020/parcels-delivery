import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";


const EditParcel = (props) => {

  const [selectedItem, setSelectedItem] = useState({
      id: '',
      item: '',
      to: '',
      from: '',
      date: '',
      description: ''
  });

  const { parcels, editParcel } = useContext(GlobalContext);
  const history = useHistory();
  const currentParcelId = props.match.params.id;

  useEffect(() => {
    const parcelId = currentParcelId;
    const selectedItem = parcels.find(parcel => parcel.id === parcelId);
    setSelectedItem(selectedItem);
  }, [currentParcelId, parcels])

  const onSubmit = () => {
    editParcel(selectedItem);
    history.push('/');
  }


  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Edit From</Label>
        <Input type='text' name='from' value={selectedItem.from} onChange={(e => setSelectedItem({...selectedItem, [e.target.name]: e.target.value}))} placeholder='Dnipro'></Input>
      </FormGroup>
      <FormGroup>
        <Label>Edit To</Label>
        <Input type='text' name='to' value={selectedItem.to} onChange={(e => setSelectedItem({...selectedItem, [e.target.name]: e.target.value}))} placeholder='Kyiv'></Input>
      </FormGroup>
      <FormGroup>
        <Label>Edit Type</Label>
        <Input type='text' name='item' value={selectedItem.item} onChange={(e => setSelectedItem({...selectedItem, [e.target.name]: e.target.value}))} placeholder='Books'></Input>
      </FormGroup>
      <FormGroup>
        <Label>Edit Date</Label>
        <Input type='date' name='date' value={selectedItem.date} onChange={(e => setSelectedItem({...selectedItem, [e.target.name]: e.target.value}))}></Input>
      </FormGroup>
      <FormGroup>
        <Label>Edit Description</Label>
        <Input type='text' name='description' value={selectedItem.description} onChange={(e => setSelectedItem({...selectedItem, [e.target.name]: e.target.value}))} placeholder='Everything you want'></Input>
      </FormGroup>
      <Button type='submit'>Edit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  );
}

export default EditParcel;
