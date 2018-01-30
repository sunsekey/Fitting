import React from 'react'
import {Grid, Col} from 'react-bootstrap'
import {Route,Switch} from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Introduction from './Introduction'
import TrainingNote from './TrainingNote'
import Album from './Album'
import About from './About'
import SelectBox from "./SelectBox";


class Home extends React.Component {
    render() {
        //variable
        const navProps = {
            brandProps: {
                name: "Fitting"
            },
            itemProps: [
                {name: "Training Note", url: "training-note"}, {name: "Album", url: "album"}, {
                    name: "About",
                    url: "about"
                }
            ]
        };
        const footerContent = "Fitting develop by Jx.Hu";
        let navItems = navProps.itemProps.map((item, i) =>
            <Nav.NavItem key={i} item={item}/>
        );
        return (
            <Grid fluid={true} className="myContainer">
                <Nav>
                    <Col xsHidden md={3}/>
                    <Col xs={12} md={3}>
                        <Nav.NavBrand name={navProps.brandProps.name}/>
                    </Col>
                    <Col md={3} xs={10}>
                        {navItems}
                    </Col>
                    <Col md={3} xsHidden/>
                </Nav>
                <Switch>
                    <Route exact path="/" component={Introduction}/>
                    <Route exact path="/core" component={Introduction}/>
                    <Route path="/core/training-note" component={TrainingNote}/>
                    <Route path="/core/album" component={Album}/>
                    <Route path="/core/about" component={About}/>
                </Switch>
                <Footer content={footerContent}/>
            </Grid>
        );
    }
}

export default Home