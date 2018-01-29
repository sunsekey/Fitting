import React, {Component} from 'react'

class RippleButton extends Component {
    render() {
        return (
            <button className={"ripple "+this.props.className}>{this.props.content}</button>
        )
    }
}

export default RippleButton