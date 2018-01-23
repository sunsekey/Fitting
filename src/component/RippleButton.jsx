import React, {Component} from 'react'

class RippleButton extends Component {
    render() {
        return (
            <button className="ovalBtn ripple">{this.props.content}</button>
        )
    }
}

export default RippleButton