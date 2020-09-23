import React, { useEffect,useContext, useState, useRef } from "react";
import {AdminContext} from './AdminContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


function Admin() {
    const [adminCart, setadminCart] = useContext(AdminContext);
    console.log('y',adminCart)

    const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
    return (
       <Container>
           <Row>
               <Col></Col>
               <Col>
               <ListGroup variant="flush">
               {
                   adminCart.map((res,index) => {
                       return (
                        <ListGroup.Item>
                           <h4>{res.name}</h4>
                           <h6>quantity- {res.quantity}</h6>
                           <h6>Rs. {res.price}</h6>
                           <FormControl component="fieldset">
                <FormLabel component="legend">Order Status</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="pending" control={<Radio />} label="pending" />
                    <FormControlLabel value="processing" control={<Radio />} label="processing" />
                    <FormControlLabel value="delivered" control={<Radio />} label="delivered" />
                </RadioGroup>
                </FormControl>
                        </ListGroup.Item>
                       )
                   })
               }

                </ListGroup>
               </Col>
               <Col></Col>
           </Row>
       </Container>
    )
}

export default Admin
