import React from 'react'
import {Row, Col} from 'react-bootstrap'
import IconButton from './IconButton'

class EnhancedForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date().toLocaleDateString(),bodyParts:[]}
        this.addBodyPart = this.addBodyPart.bind(this)
    }

    addBodyPart(){
        let bodyPart =
            <Col className="">
                <h3>背部</h3>
            </Col>;

        this.setState((prevState) => {
            prevState.bodyParts.push(bodyPart)
            return {
                bodyParts: prevState.bodyParts
        }});
    }

    render() {
        let bodyParts = this.state.bodyParts.map((item,i) =>
            <Row key={i}>{item}</Row>
        )
        return (
            <form>
                <Row>
                    <Col md={3} xsHidden/>
                    <Col md={6}>
                        <Row>
                            <Col className="">
                                <h2 style={{display:"inline-block",marginLeft:"10px"}}>{this.state.date}</h2>
                                <IconButton className="glyphicon glyphicon-plus-sign" action={this.addBodyPart}/>
                            </Col>
                        </Row>
                        {bodyParts}
                        {/*<Row>
                            <Col className="">
                                <h3>背部</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="">
                                <h4>引体向上</h4>
                            </Col>
                        </Row>
                        <Row className="center">
                            <Col className="border" md={6} xs={6}>
                                <h5>40KG</h5>
                            </Col>
                            <Col className="border" md={6} xs={6}>
                                <h5>15</h5>
                            </Col>
                        </Row>
                        <Row className="center">
                            <Col className="border" md={6} xs={6}>
                                <h5>40KG</h5>
                            </Col>
                            <Col className="border" md={6} xs={6}>
                                <h5>15</h5>
                            </Col>
                        </Row>
                        <Row className="center">
                            <Col className="border" md={6} xs={6}>
                                <h5>40KG</h5>
                            </Col>
                            <Col className="border" md={6} xs={6}>
                                <h5>15</h5>
                            </Col>
                        </Row>
                        <Row className="center">
                            <Col className="border" md={6} xs={6}>
                                <h5>40KG</h5>
                            </Col>
                            <Col className="border" md={6} xs={6}>
                                <h5>15</h5>
                            </Col>
                        </Row>*/}
                    </Col>
                    <Col md={3} xsHidden/>
                </Row>
            </form>
        )
    }
}

export default EnhancedForm