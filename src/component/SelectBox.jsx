import React from 'react'

class SelectBox extends React.Component{

    render(){
        let items = this.props.items.map((item,i)=>
            <li key={i}><span className="option" onClick={(e) => this.props.onItemClick(item.name,e)}>{item.name}</span></li>
        )
        return (
            <ul className={"optionWrapper animated zoomIn " + (this.props.isHidden ? "hidden" : "")}>
                {items}
            </ul>
        )
    }
}

export default SelectBox