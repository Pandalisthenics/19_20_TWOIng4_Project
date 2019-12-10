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
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';
import API_measure from "../API/API_measure";

class UserBarChart extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                    type: 'Temperature', NombreVente: 0, amt: 2400,
                },
                {
                    type: 'AirPollution', NombreVente: 0, amt: 2110,
                },
                {
                    type: 'Humidity', NombreVente: 0, amt: 2290,
                },
            ]

        };
    }

    componentDidMount() {
        console.log("compo");
        let api_measure = new API_measure();
        api_measure
            .fetchSensors()
            .then(response => {
                // je crée un tableau temporaire à partir dans mon state actuel
                const tableauTempo = [...this.state.data];
                console.log("data", response.data);
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].type == "temperature") {
                        tableauTempo[0].NombreVente = tableauTempo[0].NombreVente + 1;
                    }
                    if (response.data[i].type == "airPollution") {
                        tableauTempo[1].NombreVente = tableauTempo[1].NombreVente + 1;
                    }
                    if (response.data[i].type == "humidity") {
                        tableauTempo[2].NombreVente = tableauTempo[2].NombreVente + 1;
                    }
                }
                console.log(tableauTempo);
                this.setState({ data: tableauTempo });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <Card style={{ width: '26rem' }} id = "User">
                <BarChart
                    width={400}
                    height={300}
                    data={this.state.data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="NombreVente" fill="#1FA4DF" />
                </BarChart>
            </Card>
        );
    }
}
export default UserBarChart;