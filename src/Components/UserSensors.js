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

class UserSensors extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Card style={{ width: '21rem' }} id = "UserSensors">
                    <DropdownButton id="dropdown-basic-button" title="Location">
                        <Dropdown.Item href="#/action-1">Bathroom</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Bedroom</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Entrance</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Livingroom</Dropdown.Item>
                    </DropdownButton>
                    <Card.Body>
                        <Card.Title>Sensors</Card.Title>
                        <Card.Text>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Value</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>5ddba05efc13ae6c9000006b</td>
                                    <td>30</td>
                                </tr>
                                <tr>
                                    <td>5ddba05ffc13ae6c900000a5</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>5ddba05ffc13ae6c900000c3</td>
                                    <td>1</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default UserSensors;