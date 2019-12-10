import React from "react";
import '../css/App.css';
import house_big from '../img/house_big.png'
import axios from 'axios';
import '../css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import API_user from "../API/API_user";

class User extends React.Component{

    constructor(props) {
        super(props);
        this.state = {};
        this.userInput = React.createRef();

    }

    compoMaj() {
        let api_user = new API_user();
        console.log("test");
        api_user.fetchUserById(this.userInput.current.value).then(response => {
            console.log("data", response.data);
            this.setState({currentUser : response.data});
        }).catch(onerror => {
        });
    }

    handleClickDisplayUser() {
        if (this.userInput.current.value) {
            this.compoMaj();
        }
    }

    handleClickDisplayUserBis() {
        if (this.userInput.current.value) {
            axios
                .get('http://localhost:3001/api/userModel/5ddb94c6fc13ae640c000014')
                .then(res => console.log(res.data));
        }
    }

    /* ----------------------     render    --------------------------- */
    render() {
        if (!this.state.currentUser) {
            return (
                <div>
                    <Card style={{width: '21rem'}} id="User">
                        <InputGroup className="mb-3" id="Search">
                            <FormControl
                                ref={this.userInput}
                                type={"text"}
                                placeholder="User id"
                                aria-label="User search bar"
                                aria-describedby="user-search-bar"
                            />
                            <InputGroup.Append>
                                <Button onClick={() => this.handleClickDisplayUser()}>Find</Button>
                            </InputGroup.Append>
                        </InputGroup>

                        <Card.Img variant="top" src={house_big}/>
                        <Card.Body>
                            <Card.Title>Jacques Rossard</Card.Title>
                            <Card.Text>
                                ID : <br></br>
                                Localisation : <br></br>
                                Nombre d'habitants : <br></br>
                                Maison :
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            );

    }else{
        return (
            <div>
                <Card style={{width: '21rem'}} id="User">
                    <InputGroup className="mb-3" id="Search">
                            <FormControl
                            ref={this.userInput}
                            type={"text"}
                            placeholder="User id"
                            aria-label="User search bar"
                            aria-describedby="user-search-bar"
                            />
                        <InputGroup.Append>
                            <Button onClick={() => this.handleClickDisplayUser()}>Find</Button>
                        </InputGroup.Append>
                    </InputGroup>

                    <Card.Img variant="top" src={house_big}/>
                    <Card.Body>
                        <Card.Title>Jacques Rossard</Card.Title>
                        <Card.Text>
                            ID : {this.state.currentUser._id}<br></br>
                            Localisation : {this.state.currentUser.location}<br></br>
                            Nombre d'habitants : {this.state.currentUser.personsInHouse}<br></br>
                            Maison : {this.state.currentUser.houseSize}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
                );
            }
        }
}
export default User;