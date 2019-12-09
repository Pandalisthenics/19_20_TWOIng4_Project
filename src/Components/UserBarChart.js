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

class UserBarChart extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                    type: 'Temperature', NombreVente: 2400, amt: 2400,
                },
                {
                    type: 'AirPollution', NombreVente: 1398, amt: 2210,
                },
                {
                    type: 'Humidity', NombreVente: 2900, amt: 2290,
                },
            ]

        };
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