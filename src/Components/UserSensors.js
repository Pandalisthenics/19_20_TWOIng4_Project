import React from "react";
import '../css/App.css';
import '../css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
import API_sensor from "../API/API_sensor";

class UserSensors extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            totalUser : 0,
            totalSensor : 0
        }
    }

    componentDidMount() {
        console.log("compo");
        let api_sensor = new API_sensor();
        api_sensor.fetchSensors().then(response => {
            this.setState({totalSensor : response.data.sensor.length});
        }).catch(onerror => {
        });

    }

    render(){
        return (
            <div>
                <Card style={{ width: '21rem' }} id = "UserSensors">

                    <Card.Body>
                        <Card.Title>Chiffres clés de l'entreprise</Card.Title>
                        <Card.Text>
                            <p>Nombre d'utilisateur : {this.state.totalUser}</p>
                            <p>Nombre de capteur en service : {this.state.totalSensor}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Valeurs actualisées en live</small>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}
export default UserSensors;