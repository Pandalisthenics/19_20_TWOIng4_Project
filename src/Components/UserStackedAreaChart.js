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
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,} from 'recharts';

class UserStackedAreaChart extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                    date: '2014', nbVente: 4000, utilisation:455
                },
                {
                    date: '2015', nbVente: 3000, utilisation: 500
                },
                {
                    date: '2016', nbVente: 2000, utilisation: 400
                },
                {
                    date: '2017', nbVente: 1780, utilisation:398
                },
                {
                    date: '2018', nbVente: 1890, utilisation:300
                },
                {
                    date: '2019', nbVente: 2390, utilisation:621
                },
                {
                    date: '2020', nbVente: 3490, utilisation:488
                },
            ]

        };
    }

    render() {
        return (
            <Card style={{ width: '52rem' }} id = "User">
                <AreaChart
                    width={800}
                    height={250}
                    data={this.state.data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="nbVente" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="utilisation" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </Card>
        );
    }
}
export default UserStackedAreaChart;