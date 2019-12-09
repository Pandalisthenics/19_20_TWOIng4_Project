import React from 'react';
import './css/App.css';
import './css/formStyle.css'
import Form from './Components/FormSensor.js'
import User from './Components/User.js';
import UserSensors from './Components/UserSensors.js';


//routage pour switcher entre les deux pages
//TODO: npm install react-router-dom
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserBarChart from "./Components/UserBarChart";
import UserStackedAreaChart from "./Components/UserStackedAreaChart";
import UserPieChart from "./Components/UserPieChart";
import Nav from 'react-bootstrap/Nav'
import UserLastMeasureCard from "./Components/UserLastMeasureCard";
import CardDeck from "react-bootstrap/CardDeck";



//page d'accueil
const HomePage = () =>
    <body>
        <div className="wrapper">
            <div class="row">
                <div class="col-lg-4">
                        <User/>
                </div>

                <div class="col-lg-5">
                    <UserBarChart/>
                    <div id = "StackedAreaChart">
                    <UserStackedAreaChart/>
                    </div>
                </div>

                <div class="col-lg-3">
                    <UserPieChart/>
                </div>
            </div>
            <div class = "row" id = "adc">
                <div class ="col-lg-4">
                    <UserSensors/>
                </div>
                <div class = "col-lg-5">
                        <UserLastMeasureCard/>
                </div>
            </div>
        </div>
    </body>;

//page formulaire
const FormPage = () =>
    <div className="App">
        <Form/>
    </div>;



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:'React'
        };
    }

    render(){
        return (
            <Router>
                <div>
                    <Nav variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/form" eventKey="link-1">Form</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Route exact path="/home" component={HomePage} />
                    <Route path="/form" component={FormPage} />
                </div>
            </Router>
        );
    }
}

export default App;