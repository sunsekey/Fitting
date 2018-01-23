import React, {Component} from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Home from './component/Home'

class App extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/core" component={Home}/>
                </Switch>
            </Router>
        )
    }
}

export default App;