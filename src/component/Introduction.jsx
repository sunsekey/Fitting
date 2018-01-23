import React, {Component} from 'react'
import {Row,Col} from 'react-bootstrap'
import RippleButton from './RippleButton'

class Introduction extends Component {

    render(){
        const title = "KEEP YOURSELF FITTING";
        const introduction = 'Fitting is a web that can help you trace the situation of your\n' +
            'daily training.In here,you can take a training note or post some training photo.I\n' +
            'hope you enjoy it';
        const buttonContent = "Take a Note!";

        return (
            <Row className="main">
                <Col md={3}/>
                <Col md={6}>
                    <div className="content">
                        <h1>{title}</h1>
                        <p className="introduction">{introduction}</p>
                        <div>
                            <RippleButton content={buttonContent}/>
                        </div>
                    </div>
                </Col>
                <Col md={3}/>
            </Row>
        )
    }
}

export default Introduction