import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import one from '../assets/one.jpg';
{/*  import Nkrumahpic from './assets/one.jpg'; */}
{/*import one from './assets/one.jpg'; */}




const Styles = styled.div`

.jumbo { 
    background-image: url(${one});
    background-color: 'red';
    background-size : cover ;
    color :#efefef ;
    height : 400px ;
    width : 1500px;
    position : relative ;
    z-index   : -2 ;
}


.overlay {
    background : #000;
    opacity : 0.6;
    position : absolute ;
    top : 0 ;
    bottom: 0 ;
    left : 0 ;
    right : 0;
    z-index : -1; 
}


`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay" ></div>
            <Container>
                <h1></h1>
                <p></p>
            </Container>
        </Jumbo>
    </Styles>
)