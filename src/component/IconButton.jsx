import React from 'react'

class IconButton extends React.Component{

    render() {
        return (
            <i style={{cursor:"pointer",marginLeft:"4px",position:"relative"}} onClick={this.props.action} className={this.props.className}/>
        )
    }
}

export default IconButton