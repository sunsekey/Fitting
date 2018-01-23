import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import {Row} from 'react-bootstrap'

class Nav extends Component {
    render() {
        return (
            <Row className="nav">
                {this.props.children}
            </Row>
        )
    }
}
class NavBrand extends Component {
    render() {
        return (
            <span className="navBrand"><a href="/">{this.props.name}</a></span>
        )
    }
}
class NavItem extends Component {
    render() {
        return (
            <span className="navItem">
                <Link to={"/core/" + this.props.item.url}>{this.props.item.name}</Link>
            </span>
        )
    }
}

Nav.NavBrand = NavBrand
Nav.NavItem = NavItem

export default Nav