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
import {PieChart, Pie, Legend, Tooltip,} from 'recharts';
import API_sensor from "../API/API_sensor";

class UserPieChart extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : [
                { name: 'bathroom', value: 1},
                { name: 'bedroom', value: 1},
                { name: 'entrance', value: 1 },
                { name: 'livingroom', value: 1 }
            ],
        };


    }


    componentDidMount() {
        console.log("compo");
        let api_sensor = new API_sensor();
        api_sensor
            .fetchSensors()
            .then(response => {
                // je crée un tableau temporaire à partir dans mon state actuel
                const tableauTemporaire = this.state.data;
                this.setState({allSensors: response.data});
                console.log("reponseeehhhe", this.state.allSensors[0].location);
                for (let i = 0; i < this.state.allSensors.length; i++) {
                    if (this.state.allSensors[i].location == "bathroom") {
                        tableauTemporaire[0].value = tableauTemporaire[0].value + 1;
                    }
                    if (this.state.allSensors[i].location == "bedroom") {
                        tableauTemporaire[1].value = tableauTemporaire[1].value + 1;
                    }
                    if (this.state.allSensors[i].location == "entrance") {
                        tableauTemporaire[2].value = tableauTemporaire[2].value + 1;
                    }
                    if (this.state.allSensors[i].location == "livingroom") {
                        tableauTemporaire[3].value = tableauTemporaire[3].value + 1;
                    }
                }
                this.setState({ data: tableauTemporaire });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
            return (
                <PieChart width={300} height={300}>
                    <Pie dataKey="value" isAnimationActive={true} data={this.state.data} cx={150} cy={150} outerRadius={80} fill="#1FA4DF" label/>
                    <Tooltip/>
                </PieChart>
            );
    }
}
export default UserPieChart;