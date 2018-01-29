import React from 'react'

class About extends React.Component {

    render() {
        return (
            <div>
                <h1>About</h1>
                    <ul className="optionWrapper animated zoomIn">
                        <li><span className="option">背部OK没问题</span></li>
                        <li><span className="option">胸部</span></li>
                        <li><span className="option">肩部</span></li>
                        <li><span className="option">腿部</span></li>
                    </ul>
            </div>

        )
    }
}
export default About
