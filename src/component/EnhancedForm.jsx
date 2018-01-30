import React from 'react'
import {Row, Col} from 'react-bootstrap'
import IconButton from './IconButton'
import SelectBox from './SelectBox'

class EnhancedForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date().toLocaleDateString(),bodyParts:[],isSelectBoxHidden:true}
        this.toggleBodyPartSelection = this.toggleBodyPartSelection.bind(this)
        this.addBodyPart = this.addBodyPart.bind(this)
    }

    toggleBodyPartSelection(){
        this.setState((prevState)=>({
            isSelectBoxHidden: !prevState.isSelectBoxHidden
        }))
        // let bodyPart =
        //     <Col className="">
        //         <h3>背部</h3>
        //     </Col>;
        //
        // this.setState((prevState) => {
        //     prevState.bodyParts.push(bodyPart)
        //
        //     return {
        //         bodyParts: prevState.bodyParts
        // }});
    }

    addBodyPart(name){
        let bodyPart =
            <Col>
                <h3>{name}</h3>
            </Col>;
        this.setState((prevState) => {
            prevState.bodyParts.push(bodyPart)
            return {
                bodyParts: prevState.bodyParts,
                isSelectBoxHidden:true
            }
        })
    }

    render() {
        let bodyParts = this.state.bodyParts.map((item,i) =>
            <Row key={i}>{item}</Row>
        )
        let bodyPartSelections = [{
            name:"背部"
        },{
            name:"胸部"
        },{
            name:"肩部"
        },{
            name:"腿部"
        }]
        return (
            <form>
                <Row>
                    <Col md={3} xsHidden/>
                    <Col md={6}>
                        <Row>
                            <Col>
                                <div style={{position:"absolute"}}>
                                    <h2 style={{display:"inline-block",marginLeft:"10px"}}>{this.state.date}</h2>
                                    <IconButton className="glyphicon glyphicon-plus-sign" action={this.toggleBodyPartSelection}/>
                                </div>
                                <div style={{position:"absolute",left:"160px",marginLeft:"10px",marginTop:"30px"}}>
                                    <SelectBox items={bodyPartSelections} onItemClick={this.addBodyPart} isHidden={this.state.isSelectBoxHidden}/>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{marginTop:"70px"}}>
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