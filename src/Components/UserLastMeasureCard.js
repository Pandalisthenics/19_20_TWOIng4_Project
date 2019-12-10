import React from "react";
import '../css/App.css';
import house_big from '../img/house_big.png'
import air_pollution from '../img/air_pollution.png'
import temperature from '../img/temperature.png'
import humidity from '../img/humidity.png'
import '../css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class UserLastMeasureCard extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <CardDeck style={{ width: '', justifyContent: "space-around"}}>
                    <Card>
                        <Card.Img variant="top" src={air_pollution}/>
                        <Card.Body>
                            <Card.Title>43/100</Card.Title>
                            <Card.Text>
                                Air Pollution
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last measure</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={temperature} />
                        <Card.Body>
                            <Card.Title>23%</Card.Title>
                            <Card.Text>
                                Humidity
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last measure</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={humidity} />
                        <Card.Body>
                            <Card.Title>30°</Card.Title>
                            <Card.Text>
                                Temperature
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last measure</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        );
    }
}
export default UserLastMeasureCard;