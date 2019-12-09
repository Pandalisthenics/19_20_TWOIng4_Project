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

class UserPieChart extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data01 : [
                { name: 'Bathroom', value: 120 }, { name: 'Bedroom', value: 223 },
                { name: 'Entrance', value: 300 }, { name: 'Livingroom', value: 327 }
            ],
        };
    }

    render() {
        return (
                <PieChart width={300} height={300}>
                    <Pie dataKey="value" isAnimationActive={false} data={this.state.data01} cx={150} cy={150} outerRadius={80} fill="#1FA4DF" label />
                    <Tooltip />
                </PieChart>
        );
    }
}
export default UserPieChart;