import React from 'react'
import EnhancedForm from './EnhancedForm'
import {Row} from 'react-bootstrap'

class TrainingNote extends React.Component {

    render() {
        return (
            <Row className="formMain">
                <EnhancedForm/>
            </Row>
        )
    }
}

export default TrainingNote
