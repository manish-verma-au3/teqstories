import React,{useState, useContext} from 'react';
import './Home.css'
import {useSelector} from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import {CartContext} from './CartContext';

function Home(props) {
    const allPizza = useSelector(state => state.pizzaReducer);
    const [cart, setCart] = useContext(CartContext);
    console.log(allPizza)

    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
      });  
    const classes = useStyles();

    function adminData(name, price){ 
      
       const data = {name: name, price: price, quantity: 1, total_amt: price}
        setCart(prevState => [...prevState, data])
        alert('Item Added to cart')
    }

    return (
        <Container fluid>
            <Row>
                <Col></Col>
                <Col md="auto"><h2>Pizza-App</h2><hr/></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col md="auto"><Link to="/admin">Admin-panel</Link></Col>
                <Col md="auto"><Link to="/cart">Cart</Link></Col>
            </Row>

            <Row style={{marginTop:'40px'}}>
                <Col></Col>
                <Col md="auto">                      
            <div class="grid-container">    
            {
                    allPizza.map(res => {
                        return (
                    <div class="grid-item">
                    <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="200"
                image={res.url}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {res.name}
                </Typography>
                <hr/>
                <h6>Ingredients</h6>
                <Typography variant="body2" color="textSecondary" component="p">
                    {
                        res.ingredients.map(result =>{
                        return <p> {result}</p>
                        })
                    }
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography size="small" >
                    Rs. {res.price}
                </Typography>
                <Button onClick={() => adminData(res.name, res.price)}
                 size="small" color="primary">
                Add To Cart
                </Button>
            </CardActions>
            </Card>
                    </div>
                        )
                    })
            }        
            </div>
                    
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Home