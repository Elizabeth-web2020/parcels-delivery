import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";


const AddParcel = () => {

  const [item, setItem] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const { addParcel } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = () => {
    const newParcel = {
      id: uuid(),
      item: item,
      to: to,
      from: from,
      date: date,
      description: description
    }

    addParcel(newParcel);
    history.push('/');
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>From</Label>
        <Input type='text' value={from} onChange={e => setFrom(e.target.value)} placeholder='Dnipro'></Input>
      </FormGroup>
      <FormGroup>
        <Label>To</Label>
        <Input type='text' value={to} onChange={e => setTo(e.target.value)} placeholder='Kyiv'></Input>
      </FormGroup>
      <FormGroup>
        <Label>Type</Label>
        <Input type='text' value={item} onChange={e => setItem(e.target.value)} placeholder='Books'></Input>
      </FormGroup>
      <FormGroup>
        <Label>Date</Label>
        <Input type='date' value={date} onChange={e => setDate(e.target.value)}></Input>
      </FormGroup>
      <FormGroup>
        <Label>Description</Label>
        <Input type='text' value={description} onChange={e => setDescription(e.target.value)} placeholder='Everything you want'></Input>
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  );
}

export default AddParcel;
