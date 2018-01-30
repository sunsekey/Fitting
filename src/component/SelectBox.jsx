import React from 'react'

class SelectBox extends React.Component{

    render(){
        return (
            <ul className={"optionWrapper animated zoomIn " + (this.props.isHidden ? "hidden" : "")}>
                <li><span className="option">背部OK没问题</span></li>
                <li><span className="option">胸部</span></li>
                <li><span className="option">肩部</span></li>
                <li><span className="option">腿部</span></li>
            </ul>
        )
    }
}

export default SelectBox