import React, {Component} from 'react'
import {Row} from 'react-bootstrap'


class Footer extends Component {
    render() {
        return (
            <Row className="footer">
                {this.props.content}
            </Row>
        )
    }
}

export default Footer