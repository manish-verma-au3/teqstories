import React, { useEffect,useContext, useState, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {CartContext} from './CartContext';
import {AdminContext} from './AdminContext';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "@material-ui/core";

function Cart(props) {
    const [cart, setCart] = useContext(CartContext);
    const [adminCart, setadminCart] = useContext(AdminContext);
    var total = cart.reduce((acc, curr) => acc + curr.total_amt,0)
    console.log('mycart',cart)
    console.log(total)

    function sendData(){
        console.log('send')
        setadminCart(cart)
        alert('Your Order is Sucessfully Submitted')
    }
    console.log('admn', adminCart)
    return (
       <Container fluid>
           <Row>
               <Col></Col>
               <Col>
               <h2>Cart-Page</h2>
               <hr/>
               <ListGroup variant="flush">
               {
                   cart.map((res,index) => {
                       return (
                        <ListGroup.Item>
                            {res.name} - Rs.{res.price}
                        </ListGroup.Item>
                       )
                   })
               }
                </ListGroup>
                total rs- {total}
                <Button 
                onClick={() => sendData()}
                >Submit Order</Button>
               </Col>
               <Col></Col>
           </Row>
       </Container>
    )
}

export default Cart
