import React from "react";
import '../css/App.css';
import house_big from '../img/house_big.png'
import '../css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import API_user from "../API/API_user";

class User extends React.Component{

    constructor(props){
        super(props);
            }

    /* ----------------------     functions    --------------------------- */
    handleClickDisplayUser() {
        let api_user = new API_user();
        if (this.userId.current.value) {
            api_user.fetchUserById(this.userId.current.value).then(response => {
                if (response.status === 201)
                    console.log("c'est la fête");
            }).catch(onerror => {

            });
        }
    }




    /* ----------------------     render    --------------------------- */
    render(){
        return (
            <div>
                <Card style={{ width: '21rem' }} id = "User">
                    <InputGroup className="mb-3" id = "Search">
                        <FormControl
                            ref={this.userId}
                            type={"text"}
                            placeholder="User id"
                            aria-label="User search bar"
                            aria-describedby="user-search-bar"
                        />
                        <InputGroup.Append>
                            <Button type="submit" onClick={() => this.handleClickDisplayUser()}
                                    id="">Find</Button>
                        </InputGroup.Append>
                    </InputGroup>

                    <Card.Img variant="top" src={house_big} />
                    <Card.Body>
                        <Card.Title>Jacques Rossard</Card.Title>
                        <Card.Text>
                            ID : 5ddba05efc13ae6c9000006b<br></br>
                            Maison : big<br></br>
                            Localisation : argentina<br></br>
                            Nombre d'habitants : 2
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default User;