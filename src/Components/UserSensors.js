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
            boo : false,
            totalSensor :0
        }
    }
    componentDidMount() {
        console.log("compo");
        let api_sensor = new API_sensor();
        api_sensor.fetchSensors().then(response => {
            console.log("TAILLE");
            this.state.totalSensor = response.data.sensors.length;
            this.state.boo = true;
        }).catch(onerror => {
        });
    }

    render() {
        if (this.boo == false) {
            return (
                <div>
                    <Card style={{width: '21rem'}} id="UserSensors">

                        <Card.Body>
                            <Card.Title>Chiffres clés de l'entreprise</Card.Title>
                            <Card.Text>
                                <p>Nombre d'utilisateur : </p>
                                <p>Nombre de capteur en service : 0</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Valeurs actualisées en live</small>
                        </Card.Footer>
                    </Card>
                </div>
            );

    }else {
            return (
                <div>
                    <Card style={{width: '21rem'}} id="UserSensors">

                        <Card.Body>
                            <Card.Title>Chiffres clés de l'entreprise</Card.Title>
                            <Card.Text>
                                <p>Nombre d'utilisateur : </p>
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
}
export default UserSensors;