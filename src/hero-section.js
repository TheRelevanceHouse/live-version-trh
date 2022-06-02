import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import heroimage from './images/Relevant.svg'
import scroll from "./images/scrolldown.svg"

export default function Hero (props) {
    return (
    <div className='hero-section'>
    <Container >
        <Row style={{ marginTop:'35px'}}>
            <Col  xs={6} md={6}>
            <br/>
            <br/>
            <br/>
               <h4 id='heading-1'>
               ONLY RELEVANCE 
               </h4>
               <h4 id='heading-2' style={{color:'FAFAFA !important'}}>
                   HAS IMPACT
               </h4>
                <hr style={{background: '#00a993'}}/>
                <br />
               <p id='hero-line' style={{color:'white', lineHeight:'34px', borderLeft:'3px solid #00A993'}}>
               &nbsp;&nbsp;&nbsp;EVERY GOOD IDEA FITS ON A POST-IT. <br />
               &nbsp;&nbsp;&nbsp;IF IT DOESN´T. IT´S NOT A GOOD IDEA, YET.
               </p>
            <br/>
            <br/>
            
               
               <a href='/' className='btn-green'>
               Do you want to know ?
                </a>
            </Col>
            <Col xs={6} md={6} style={{ textAlign :'right' }}>
                <img src={heroimage} alt='Relevant' style={{width: '500px', height: '500px'}}/>
            </Col>
        </Row>
        <Row style={{ textAlign:'center', marginBottom:'40px', marginTop:'10px' }}>
            <br />
            <br />
            <p id="scroll">
            SCROLL DOWN
            </p>
            <img src={scroll}  alt='scroll'/>
        </Row>
    </Container>
    </div>
    ); 
}